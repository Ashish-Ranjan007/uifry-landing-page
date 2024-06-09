import { Box, Typography } from "@mui/material";
import React from "react";

import "./advantages.css";
import advantagesImage from "../../assets/advantages-image.png";
import advantagesIcon from "../../assets/icons/advantages-icon1.svg";
import elipse from "../../assets/gradient-elipse.png";
import Star from "../star/Star";

const Advantages: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                marginX: "auto",
                flexDirection: {
                    xs: "column-reverse",
                    md: "row",
                },
                alignItems: "center",
                justifyContent: {
                    xs: "center",
                    md: "space-between",
                },
                paddingLeft: "10%",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    flex: "1",
                    paddingRight: {
                        xs: "10%",
                        md: "16px",
                    },
                }}
            >
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
                    ADVANTAGES
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "32px",
                        letterSpacing: "0.25px",
                        marginBottom: "16px",
                        fontWeight: 900,
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    Why Choose Uifry?
                </Typography>
                <Box
                    sx={{
                        marginY: "24px",
                        display: "flex",
                        gap: "16px",
                        justifyContent: {
                            xs: "center",
                            md: "flex-start",
                        },
                        alignItems: "center",
                    }}
                >
                    <img
                        className="advantages-icon"
                        src={advantagesIcon}
                        alt="Advantage icon"
                    />
                    <Typography
                        sx={{
                            fontWeight: 600,
                            letterSpacing: "0.25px",
                            textAlign: {
                                xs: "center",
                                md: "left",
                            },
                        }}
                    >
                        Clever Notifications
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
            </Box>
            <Box sx={{ position: "relative", flex: "1" }}>
                <img
                    className="advantages-image"
                    src={advantagesImage}
                    alt="Advantages demo image"
                />
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        bottom: "100px",
                        left: "100px",
                    }}
                />
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        top: "100px",
                        right: "100px",
                    }}
                />
                <img
                    className="advantage-elipse"
                    src={elipse}
                    alt="Non-functional image for design"
                />
            </Box>
        </Box>
    );
};

export default Advantages;
