import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./BorderButton.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
const BorderButton = ({ children, ...props }: IButtonProps) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};

export default BorderButton;
