import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";
import { useAppSelector } from "../../../../store/store";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
const Button = ({ children, ...props }: IButtonProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <button className={isDark ? `${s.button} ${s.dark}` : s.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
