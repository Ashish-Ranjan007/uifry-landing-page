import { Box, Link } from "@mui/material";
import React, { useContext } from "react";

import "./header.css";
import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/logo-white.png";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/cross.svg";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import { ThemeContext } from "../../context/ThemeContext.ts";
import { SidebarContext } from "../../context/SidebarContext.ts";

const linkStyles = {
    margin: "16px",
    textDecoration: "none",
    color: "inherit",
    transition: "color 300ms ease",
    fontWeight: "600",
    letterSpacing: "0.35px",
    "&:hover": {
        color: "#FF5555",
    },
};

const Header: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { openSidebar, setOpenSidebar } = useContext(SidebarContext);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: {
                    xs: "space-between",
                    md: "center",
                },
                alignItems: "center",
                marginY: "32px",
                width: {
                    md: "80%",
                    xs: "90%",
                },
                marginX: "auto",
            }}
        >
            {theme === "light" ? (
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "111px", height: "35px" }}
                />
            ) : (
                <img
                    src={whiteLogo}
                    alt="logo"
                    style={{ width: "111px", height: "35px" }}
                />
            )}

            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "flex",
                    },
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginLeft: "32px",
                }}
            >
                <Link href="#" sx={{ ...linkStyles, color: "#FF5555" }}>
                    Home
                </Link>
                <Link href="#" sx={linkStyles}>
                    About Us
                </Link>
                <Link href="#" sx={linkStyles}>
                    Pricing
                </Link>
                <Link href="#" sx={linkStyles}>
                    Features
                </Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <button className="download-button">Download</button>
                <button
                    className="toggle-theme"
                    onClick={() => {
                        setTheme((theme) =>
                            theme === "light" ? "dark" : "light"
                        );
                    }}
                >
                    {theme === "light" ? (
                        <img
                            className="toggle-theme-icon"
                            src={sunIcon}
                            alt="Button to toggle theme"
                        />
                    ) : (
                        <img
                            className="toggle-theme-icon"
                            src={moonIcon}
                            alt="Button to toggle theme"
                        />
                    )}
                </button>
                <button
                    className="menu-button"
                    aria-label="Menu button"
                    onClick={() => setOpenSidebar((val) => !val)}
                >
                    {!openSidebar ? (
                        <img
                            src={menuIcon}
                            alt="Menu button"
                            className="menu-button-icon"
                        />
                    ) : (
                        <img
                            src={closeIcon}
                            alt="Close menu button"
                            className="menu-button-icon"
                        />
                    )}
                </button>
            </Box>
        </Box>
    );
};

export default Header;
