import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let num = index + 0.5;
        return (
            <>
                {stars >= index + 1 ? (
                    <StarIcon fontSize="small" sx={{ color: "orange" }} key={index} />
                ) : stars >= num ? (
                    <StarHalfIcon fontSize="small" sx={{ color: "orange" }} />
                ) : (
                    <StarBorderIcon fontSize="small" sx={{ color: "orange" }} />
                )}
            </>
        );
    });
    return <div>{ratingStar}</div>;
};

export default Rating;