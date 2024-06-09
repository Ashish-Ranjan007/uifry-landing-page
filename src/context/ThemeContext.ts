import { Dispatch, SetStateAction, createContext } from "react";

export const ThemeContext = createContext<{
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}>({
    theme: "light",
    setTheme: () => {},
});
