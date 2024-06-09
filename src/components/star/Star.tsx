import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import star from "../../assets/star.png";
import whiteStar from "../../assets/star-white.png";

const Star = ({ styles }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {theme === "light" ? (
                <img style={styles} src={star} alt="A star image" />
            ) : (
                <img style={styles} src={whiteStar} alt="A star image" />
            )}
        </>
    );
};

export default Star;
