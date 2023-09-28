import { HTMLAttributes } from "react";
import s from "./Input.module.scss";
import { useAppSelector } from "../../../store/store";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {}

const Input = (props: IInputProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <input
      className={isDark ? `${s.input} ${s.dark}` : s.input}
      type="text"
      {...props}
    />
  );
};

export default Input;
