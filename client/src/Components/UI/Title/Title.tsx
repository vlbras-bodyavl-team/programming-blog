import { ReactNode } from "react";
import s from "./Title.module.scss";
import { useAppSelector } from "../../../store/store";

interface ITitleProps {
  children?: ReactNode;
}
const Title = ({ children }: ITitleProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <h3 className={isDark ? `${s.title} ${s.dark}` : s.title}>{children}</h3>
  );
};

export default Title;
