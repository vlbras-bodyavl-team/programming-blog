import { InputHTMLAttributes, useState } from "react";
import s from "./InputAdminForm.module.scss";
import { useAppSelector } from "../../../../store/store";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  dropdownItems?: string[];
  initialValue?: string;
}

const InputFormAdmin = ({
  dropdownItems,
  initialValue,
  ...props
}: IInputProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  const [value, setValue] = useState(initialValue || "");

  return (
    <div
      className={isDark ? `${s.container} ${s.dark}` : s.container}
      style={props.style}
    >
      <input
        className={s.input}
        autoComplete="off"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (e.relatedTarget === null) {
            e.target.focus();
          }
        }}
        {...props}
      />

      {dropdownItems && (
        <ul className={s.dropdown}>
          {dropdownItems
            .filter((item) =>
              item.toLowerCase().includes(String(value).toLowerCase())
            )
            .map((item, i) => (
              <li
                key={i}
                className={s.dropdownItem}
                onClick={() => setValue(item)}
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
