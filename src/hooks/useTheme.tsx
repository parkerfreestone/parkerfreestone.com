import { useState, useEffect } from "react";

export const globalThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "synthwave",
  "cyberpunk",
  "garden",
  "luxury",
  "coffee",
];

const DEFAULT_THEME = globalThemes[1];

export const useTheme = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [theme, setTheme] = useState<string>(
    (localStorage.getItem("global-theme") as string) || DEFAULT_THEME
  );

  useEffect(() => {
    localStorage.setItem("global-theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
