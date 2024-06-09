import React, { useContext } from "react";

import "./footer.css";
import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/logo-white.png";
import messageIcon from "../../assets/icons/message.svg";
import callIcon from "../../assets/icons/call.svg";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

const headerStyle = {
    letterSpacing: "0.25px",
    fontWeight: "600",
    fontSize: "24px",
};

const Contacts: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Box
            sx={{
                width: {
                    xs: "150px",
                    sm: "inherit",
                },
            }}
        >
            {theme === "light" ? (
                <img className="footer-logo" src={logo} alt="Logo image" />
            ) : (
                <img
                    className="footer-logo"
                    src={whiteLogo}
                    alt="Logo image"
                    style={{
                        width: "111px",
                        height: "35px",
                    }}
                />
            )}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingTop: "16px",
                }}
            >
                <img
                    className="message-icon"
                    src={messageIcon}
                    alt="Message icons"
                />
                <Typography sx={{ fontWeight: "500" }}>
                    Help@Frybix.com
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    paddingTop: "16px",
                }}
            >
                <img className="call-icon" src={callIcon} alt="Call icon" />
                <Typography sx={{ fontWeight: "500" }}>
                    +1234 5678 9101
                </Typography>
            </Box>
        </Box>
    );
};

const Links: React.FC = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: "150px",
                    sm: "inherit",
                },
            }}
        >
            <Typography sx={headerStyle}>Links</Typography>
            <Box>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Bookings</a>
                <a href="#">Blog</a>
            </Box>
        </Box>
    );
};
const Legal: React.FC = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: "150px",
                    sm: "inherit",
                },
            }}
        >
            <Typography sx={headerStyle}>Legal</Typography>
            <Box>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cooie Policy</a>
            </Box>
        </Box>
    );
};
const Product: React.FC = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: "150px",
                    sm: "inherit",
                },
            }}
        >
            <Typography sx={headerStyle}>Product</Typography>
            <Box>
                <a href="#">Take Tour</a>
                <a href="#">Live Chat</a>
                <a href="#">Reviews</a>
            </Box>
        </Box>
    );
};

const Newsletter: React.FC = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: "150px",
                    sm: "inherit",
                },
            }}
        >
            <Typography sx={headerStyle}>Newsletter</Typography>
            <Typography sx={{ fontWeight: "500", marginY: "8px" }}>
                Stay Up To Date
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: {
                        xs: "flex-start",
                        sm: "center",
                    },
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                }}
            >
                <input type="text" placeholder="Your Email" />
                <button>
                    <Typography sx={{ fontWeight: 600 }}>Subscribe</Typography>
                </button>
            </Box>
        </Box>
    );
};

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                paddingX: "10%",
                paddingBottom: "10%",
                justifyContent: "space-between",
                flexWrap: "wrap",
                overflow: "hidden",
            }}
        >
            <Contacts />
            <Links />
            <Legal />
            <Product />
            <Newsletter />
        </Box>
    );
};

export default Footer;
