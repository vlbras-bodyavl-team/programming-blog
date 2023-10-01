import { ChangeEvent, HTMLAttributes, useRef, useState } from "react";
import s from "./Input.module.scss";
import { useAppSelector } from "../../../store/store";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  dropdownItems?: string[];
}

const Input = ({ dropdownItems, ...props }: IInputProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  const handleLiClick = (item: string) => {
    setValue(item);
  };

  return (
    <div className={s.container}>
      <input
        className={isDark ? `${s.input} ${s.dark}` : s.input}
        type="text"
        ref={inputRef}
        value={value}
        {...props}
        onChange={handleInputChange}
        onBlur={(e) => {
          if (e.relatedTarget === null) {
            e.target.focus();
          }
        }}
      />
      {dropdownItems && (
        <ul className={s.dropdown}>
          {dropdownItems
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            .map((item, i) => (
              <li
                key={i}
                className={s.dropdownItem}
                onClick={() => handleLiClick(item)}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
