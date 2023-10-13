import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useAppSelector } from "../../../../store/store";
import s from "./SmallButton.module.scss";

interface ISmallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const SmallButton: FC<ISmallButtonProps> = ({ children, ...props }) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button className={isDark ? `${s.button} ${s.dark}` : s.button} {...props}>
      {children}
    </button>
  );
};

export default SmallButton;
