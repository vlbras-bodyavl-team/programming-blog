import { useMediaQuery } from "react-responsive";
import Router from "./Components/Router/Router";
import { useEffect } from "react";
import { getColorTheme, setColorTheme } from "./utils";
import { useAppSelector } from "./store/store";

function App() {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  useEffect(() => {
    if (!getColorTheme()) setColorTheme(systemPrefersDark ? "dark" : "light");
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
