import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector } from "../../../store/store";
import { setColorTheme } from "../../../utils";

const AuthLayout = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  setColorTheme(isDarkMode ? "dark" : "light");
  return <Outlet />;
};

export default AuthLayout;
