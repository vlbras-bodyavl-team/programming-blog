import { FC, LabelHTMLAttributes, ReactNode } from "react";
import s from "./Label.module.scss";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

const Label: FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <label className={s.label} {...rest}>
      {children}
    </label>
  );
};

export default Label;
