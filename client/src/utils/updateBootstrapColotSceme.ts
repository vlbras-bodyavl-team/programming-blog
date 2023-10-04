const htmlElement = document.querySelector("html");
export function updateBootStrapTheme(theme: "light" | "dark") {
  htmlElement?.setAttribute("data-bs-theme", theme);
}
