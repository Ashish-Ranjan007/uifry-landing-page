import { Box, Typography } from "@mui/material";
import React from "react";

import "./faq.css";
import Star from "../star/Star";

type props = {
    bgColor: "red" | "white";
};

const headingStyle = {
    fontSize: "32px",
    letterSpacing: "0.25px",
    marginBottom: "16px",
    fontWeight: 900,
    textAlign: {
        xs: "center",
        md: "left",
    },
};

const QAComp: React.FC<props> = ({ bgColor }: props) => {
    return (
        <Box
            sx={{
                padding: "16px",
                marginY: "16px",
                bgcolor: bgColor === "red" ? "#FF5555" : "#FFFFFF",
                borderRadius: "8px",
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: "24px",
                    color: bgColor === "red" ? "white" : "black",
                }}
                component="h2"
            >
                The Best Financial Accounting App Ever!
            </Typography>
            <Typography
                sx={{
                    color: bgColor === "red" ? "#FFFFFF" : "gray",
                }}
            >
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
            </Typography>
        </Box>
    );
};

const Faq: React.FC = () => {
    return (
        <Box sx={{ padding: "10%" }}>
            <Box sx={{ position: "relative" }}>
                <Typography
                    sx={{
                        color: "#FF5555",
                        letterSpacing: "0.25px",
                        fontWeight: "600",
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    FAQ
                </Typography>
                <Typography sx={headingStyle}>Frequently Asked</Typography>
                <Typography sx={headingStyle}>Question</Typography>
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        top: "100px",
                        right: "300px",
                        "z-index": "-999",
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <Box>
                    <QAComp bgColor="red" />
                    <QAComp bgColor="white" />
                    <QAComp bgColor="red" />
                </Box>
                <Box>
                    <QAComp bgColor="white" />
                    <QAComp bgColor="red" />
                    <QAComp bgColor="white" />
                </Box>
            </Box>
        </Box>
    );
};

export default Faq;
