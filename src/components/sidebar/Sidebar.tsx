import { Box, Link } from "@mui/material";
import React, { useContext } from "react";

import { SidebarContext } from "../../context/SidebarContext";

const linkStyles = {
    display: "block",
    padding: "16px 32px",
    textDecoration: "none",
    color: "inherit",
    transition: "color 300ms ease",
    fontWeight: "600",
    letterSpacing: "0.25px",
    "&:hover": {
        color: "#FF5555",
        backgroundColor: "black",
    },
    fontSize: "20px",
};

const Sidebar: React.FC = () => {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <Box
            sx={{
                height: "calc(100vh - 109.3px)",
                width: "200px",
                transform: openSidebar
                    ? "translate(0px)"
                    : "translate(-1500px)",
                transition: "transform 300ms ease",
                position: "absolute",
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
    );
};

export default Sidebar;
