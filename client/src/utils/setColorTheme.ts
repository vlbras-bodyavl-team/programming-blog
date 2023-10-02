export const setColorTheme = (theme: "light" | "dark") => {
  localStorage.setItem("theme", theme);
};
