import { useState } from "react";

export const useToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
return {isDarkMode,toggleDarkMode}
}