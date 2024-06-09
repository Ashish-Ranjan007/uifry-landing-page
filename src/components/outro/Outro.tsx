import { Box, Typography } from "@mui/material";
import React from "react";

import "./outro.css";
import elipse from "../../assets/gradient-elipse.png";
import outroImage from "../../assets/outro-image.png";
import appleIcon from "../../assets/icons/apple-icon.svg";
import Star from "../star/Star";

const Outro: React.FC = () => {
    return (
        <Box sx={{ padding: "10%", position: "relative" }}>
            <img
                className="outro-image"
                src={outroImage}
                alt="Non-functional image for design"
            />
            <Star
                styles={{
                    position: "absolute",
                    top: "0",
                    right: "50px",
                    zIndex: "-999",
                    width: "48px",
                }}
            />
            <Star
                styles={{
                    position: "absolute",
                    top: "300px",
                    left: "50px",
                    zIndex: "-999",
                    width: "48px",
                }}
            />
            <img
                className="outro-elipse"
                src={elipse}
                alt="Non-functional image for design"
            />
            <Box
                sx={{
                    color: "#ffffff",
                    position: "absolute",
                    padding: "10%",
                    top: "50%",
                    left: {
                        md: "72px",
                        sm: "50px",
                        xs: "16px",
                    },
                    transform: "translateY(-50%)",
                }}
            >
                <Typography
                    sx={{
                        // textAlign: "center",
                        letterSpacing: "0.5px",
                        fontWeight: "700",
                        fontSize: {
                            lg: "48px",
                            md: "32px",
                            sm: "24px",
                            xs: "16px",
                        },
                        marginBottom: {
                            md: "16px",
                            sm: "8px",
                            xs: "4px",
                        },
                    }}
                >
                    Ready To Get Started?
                </Typography>
                <Typography
                    sx={{
                        maxWidth: {
                            lg: "500px",
                            md: "400px",
                            sm: "275px",
                            xs: "200px",
                        },
                        textTransform: "capitalize",
                        fontSize: {
                            md: "16px",
                            sm: "12px",
                            xs: "8px",
                        },
                        marginBottom: {
                            md: "16px",
                            sm: "8px",
                            xs: "4px",
                        },
                    }}
                >
                    Risus habitant leo egestas mauris diam eget morbi tempus
                    vulputate.
                </Typography>
                <button className="outro-cta">
                    <Typography
                        sx={{
                            fontWeight: "600",
                        }}
                    >
                        Download App
                    </Typography>
                    <img
                        className="apple-icon"
                        src={appleIcon}
                        alt="Apple store icon"
                    />
                </button>
            </Box>
        </Box>
    );
};

export default Outro;
