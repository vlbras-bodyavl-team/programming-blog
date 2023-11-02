import React from "react";
import s from "./EditIconButton.module.scss";
import pencil from "../../../../assets/images/pencil.png";
import pencilWhite from "../../../../assets/images/pencilWhite.png";
import { useAppSelector } from "../../../../store/store";

interface EditIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const EditIconButton: React.FC<EditIconButtonProps> = (props) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button {...props} className={s.button}>
      <img src={isDark ? pencilWhite : pencil} alt="pencil" />
    </button>
  );
};

export default EditIconButton;
