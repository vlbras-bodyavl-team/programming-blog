import { ButtonHTMLAttributes, ReactNode } from "react";
import { useAppSelector } from "../../../../store/store";
import s from "./Button.module.scss";

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
