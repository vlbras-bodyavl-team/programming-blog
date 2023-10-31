import React, { ReactNode } from "react";
import s from "./Info.module.scss";
import { useAppSelector } from "../../../store/store";

interface InfoProps {
  children?: ReactNode;
}

const Info: React.FC<InfoProps> = ({ children }) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <article className={isDark ? `${s.container} ${s.dark}` : s.container}>
      {children}
    </article>
  );
};

export default Info;
