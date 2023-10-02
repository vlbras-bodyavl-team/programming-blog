import Router from "./components/Router/Router";
import { useEffect } from "react";
import { useAppSelector } from "./store/store";

function App() {
  const isDark = useAppSelector((state) => state.theme.isDarkMode);
  useEffect(() => {
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
