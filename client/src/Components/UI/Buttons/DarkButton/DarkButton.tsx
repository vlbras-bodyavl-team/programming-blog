import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./DarkButton.module.scss";
import { useAppSelector } from "../../../../store/store";

interface IDarkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
const DarkButton = ({ children, ...props }: IDarkButtonProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <button className={isDark ? `${s.button} ${s.dark}` : s.button} {...props}>
      {children}
    </button>
  );
};

export default DarkButton;
