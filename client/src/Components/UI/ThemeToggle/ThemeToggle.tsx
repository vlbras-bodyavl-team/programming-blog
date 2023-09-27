import sun from "../../../assets/images/sun.svg";
import moon from "../../../assets/images/moon.svg";
import { ReactSVG } from "react-svg";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { toggle } from "../../../store/features/isDarkModeSlice";

const ThemeToggle = () => {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  return (
    <ReactSVG src={isDark ? sun : moon} onClick={() => dispatch(toggle())} />
  );
};

export default ThemeToggle;
