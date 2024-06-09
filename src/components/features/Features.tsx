import React from "react";
import { Box, Typography } from "@mui/material";

import "./features.css";
import elipse from "../../assets/gradient-elipse.png";
import featuresImage from "../../assets/feature-image.svg";
import featuresIcon1 from "../../assets/icons/features-icon1.png";
import featuresIcon2 from "../../assets/icons/features-icon2.svg";
import featuresIcon3 from "../../assets/icons/features-icon3.svg";
import Star from "../star/Star";

const obj1 = {
    marginY: "8px",
    display: "flex",
    gap: "16px",
    justifyContent: {
        xs: "center",
        md: "flex-start",
    },
};
const obj2 = {
    fontWeight: 600,
    letterSpacing: "0.25px",
    textAlign: {
        xs: "center",
        md: "left",
    },
};
const obj3 = {
    color: "grey",
    fontWeight: 500,
    textAlign: {
        xs: "center",
        md: "left",
    },
    maxWidth: "700px",
};

const Features: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                marginX: "auto",
                flexDirection: {
                    xs: "column-reverse",
                    md: "row-reverse",
                },
                alignItems: "center",
                justifyContent: {
                    xs: "center",
                    md: "space-between",
                },
                paddingX: {
                    xs: "48px",
                    md: "0px",
                },
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    flex: "1",
                    paddingRight: {
                        xs: "0",
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
                    FEATURES
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
                    Uifry Premium
                </Typography>
                <Box sx={{ marginY: "24px" }}>
                    <Box sx={obj1}>
                        <img
                            className="features-icon"
                            src={featuresIcon1}
                            alt="Icon for Budgeting Intervals"
                        />
                        <Typography sx={obj2}>Budgeting Intervals</Typography>
                    </Box>
                    <Typography sx={obj3}>
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet faucibus tincidunt eu adipiscing
                        sociis arcu lorem porttitor.
                    </Typography>
                </Box>
                <Box sx={{ marginY: "24px" }}>
                    <Box sx={obj1}>
                        <img
                            className="features-icon"
                            src={featuresIcon2}
                            alt="Icon for Budgeting Intervals"
                        />
                        <Typography sx={obj2}>Budgeting Intervals</Typography>
                    </Box>
                    <Typography sx={obj3}>
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet faucibus tincidunt eu adipiscing
                        sociis arcu lorem porttitor.
                    </Typography>
                </Box>
                <Box sx={{ marginY: "24px" }}>
                    <Box sx={obj1}>
                        <img
                            className="features-icon"
                            src={featuresIcon3}
                            alt="Icon for Budgeting Intervals"
                        />
                        <Typography sx={obj2}>Budgeting Intervals</Typography>
                    </Box>
                    <Typography sx={obj3}>
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet faucibus tincidunt eu adipiscing
                        sociis arcu lorem porttitor.
                    </Typography>
                </Box>
                {/* <img
                    className="feature-elipse1"
                    src={elipse}
                    alt="Non-functional image for design"
                /> */}
            </Box>
            <Box sx={{ position: "relative", flex: "1" }}>
                <img
                    className="features-image"
                    src={featuresImage}
                    alt="An image of features"
                />
                <img
                    className="feature-elipse2"
                    src={elipse}
                    alt="Non-functional image for design"
                />
                <Star
                    styles={{
                        position: "absolute",
                        width: "48px",
                        top: "150px",
                        left: "50px",
                    }}
                />
            </Box>
        </Box>
    );
};

export default Features;
