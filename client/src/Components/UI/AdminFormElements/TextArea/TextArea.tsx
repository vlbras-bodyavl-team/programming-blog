import { TextareaHTMLAttributes } from "react";
import s from "./TextArea.module.scss";
import { useAppSelector } from "../../../../store/store";

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: ITextAreaProps) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <textarea
      className={isDark ? `${s.textarea} ${s.dark}` : s.textarea}
      {...props}
    />
  );
};

export default TextArea;
