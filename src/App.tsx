import { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Home from "./pages/HomePage";
import { ThemeContext } from "./context/ThemeContext";
import { SidebarContext } from "./context/SidebarContext";

const lightTheme = createTheme({
    typography: {
        fontFamily: "Clash Display, Ariel",
    },
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Clash Display, Ariel",
    },
    palette: {
        mode: "dark",
    },
});

function App() {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <CssBaseline />
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <SidebarContext.Provider
                    value={{ openSidebar, setOpenSidebar }}
                >
                    <Home />
                </SidebarContext.Provider>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
