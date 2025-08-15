export const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const setTheme = (isDark: boolean) => {
  localStorage.setItem("theme", isDark ? "dark" : "light");
};
