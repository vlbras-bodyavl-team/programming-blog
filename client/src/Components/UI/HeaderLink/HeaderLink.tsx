import { AnchorHTMLAttributes, ReactNode } from "react";
import s from "./HeaderLink.module.scss";

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}
const HeaderLink = ({ children, ...props }: ILinkProps) => {
  return (
    <a {...props} className={s.headerLink}>
      {children}
    </a>
  );
};

export default HeaderLink;
