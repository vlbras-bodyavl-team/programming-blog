export const getColorTheme = (): string | null => {
  const theme = localStorage.getItem("theme");
  return theme;
};
