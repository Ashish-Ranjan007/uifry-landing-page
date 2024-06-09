import React from "react";
import { Box, Typography } from "@mui/material";

import "./fullyCustomizable.css";
import elipse from "../../assets/gradient-elipse.png";
import customizationImage from "../../assets/customization.png";
import customizationIcon from "../../assets/icons/customization-icon.svg";
import Star from "../star/Star";

const FullyCustomizable: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                marginX: "auto",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                alignItems: "center",
                justifyContent: {
                    xs: "center",
                    md: "space-between",
                },
            }}
        >
            <Box sx={{ flex: "1", position: "relative" }}>
                <img
                    className="customization-image"
                    src={customizationImage}
                    alt="Image of customizablity of the app"
                />
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        top: "0",
                        right: "0",
                    }}
                />
                <img
                    className="customization-elipse"
                    src={elipse}
                    alt="Non-functional image for design"
                />
            </Box>
            <Box
                sx={{
                    flex: "1",
                    position: "relative",
                    padding: {
                        xs: "16px",
                        md: "inherit",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "32px",
                        justifyContent: {
                            xs: "center",
                            md: "flex-start",
                        },
                    }}
                >
                    <img
                        className="customization-icon"
                        src={customizationIcon}
                        alt="Non-functional image representing an icon"
                    />
                    <Typography
                        component="h1"
                        sx={{
                            fontWeight: 600,
                            letterSpacing: "0.25px",
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        Fully Customizable
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: "grey",
                        fontWeight: 500,
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                        maxWidth: "700px",
                    }}
                >
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis tristique lacus, et blandit viverra nisl velit. Sed
                    mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                    Lectus eget eget ac dolor neque lorem sapien, suspendisse
                    aliquam.
                </Typography>
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        bottom: "-150px",
                        right: "150px",
                    }}
                />
            </Box>
        </Box>
    );
};

export default FullyCustomizable;
