import React, { InputHTMLAttributes } from "react";
import s from "./InputSmall.module.scss";

interface InputSmallProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputSmall: React.FC<InputSmallProps> = (props) => {
  return <input {...props} className={s.input} />;
};

export default InputSmall;
