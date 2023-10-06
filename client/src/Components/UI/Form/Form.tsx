import { FormHTMLAttributes, ReactNode } from "react";
import s from "./Form.module.scss";

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

const Form = ({ children, ...props }: IFormProps) => {
  return (
    <form className={s.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
