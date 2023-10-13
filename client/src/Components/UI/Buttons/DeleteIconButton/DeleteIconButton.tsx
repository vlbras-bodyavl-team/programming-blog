import { ButtonHTMLAttributes, FC } from "react";
import { useAppSelector } from "../../../../store/store";
import s from "./DeleteIconButton.module.scss";
import deleteIcon from "../../../../assets/images/delete.svg";
import { ReactSVG } from "react-svg";

interface IDeleteIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DeleteIconButton: FC<IDeleteIconButtonProps> = (props) => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <button className={isDark ? `${s.button} ${s.dark}` : s.button} {...props}>
      <ReactSVG src={deleteIcon} />
    </button>
  );
};

export default DeleteIconButton;
