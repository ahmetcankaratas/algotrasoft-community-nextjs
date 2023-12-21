import { useEffect, Dispatch, SetStateAction } from "react";
import { useApp } from "../store/app-state";
  
export default function useDarkSide():[string, Dispatch<SetStateAction<string>>] {
    const { theme, setTheme } = useApp();

    const colorTheme = theme === "dark" ? "light" : "dark";
    
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
  
    return [colorTheme, setTheme]
}