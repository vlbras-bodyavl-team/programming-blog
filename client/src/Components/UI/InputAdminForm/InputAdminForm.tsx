import { ChangeEvent, InputHTMLAttributes, useRef } from "react";
import s from "./InputAdminForm.module.scss";
import { useAppSelector } from "../../../store/store";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  dropdownItems?: string[];
  setValue: (value: string) => void;
}

const InputFormAdmin = ({ dropdownItems, setValue, ...props }: IInputProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleLiClick = (item: string) => {
    setValue(item);
  };

  return (
    <div className={isDark ? `${s.container} ${s.dark}` : s.container}>
      <input
        className={s.input}
        type="text"
        ref={inputRef}
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
            .filter((item) =>
              item.toLowerCase().includes(String(props.value).toLowerCase())
            )
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

export default InputFormAdmin;
