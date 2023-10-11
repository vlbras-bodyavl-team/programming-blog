import sun from "../../../../assets/images/sun.svg";
import moon from "../../../../assets/images/moon.svg";
import { ReactSVG } from "react-svg";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { toggle } from "../../../../store/features/themeModeSlice";
import s from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  return (
    <ReactSVG
      src={isDark ? sun : moon}
      onClick={() => dispatch(toggle())}
      className={s.themeToggle}
    />
  );
};

export default ThemeToggle;
