import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./BorderButton.module.scss";
import { useAppSelector } from "../../../../store/store";
interface BorderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BorderButton = ({ children, ...rest }: BorderButtonProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button className={isDark ? `${s.button} ${s.dark}` : s.button} {...rest}>
      {children}
    </button>
  );
};

export default BorderButton;
