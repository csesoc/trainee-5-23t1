import React, { useState, useEffect } from "react";
import { Typography } from "@mui/joy";
import { FlexBox, fontColour } from "../utils/generalStyles";
import { Rating } from "react-simple-star-rating";
import { useMediaQuery } from "react-responsive";

export const RestaurantDescriptionTag = ({ tag, description }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [des, setDes] = useState("");

  useEffect(() => {
    if (description) {
      if (tag === "Price") {
        let priceNum = description;
        if (typeof priceNum === "string") priceNum = parseInt(description);
        let priceRating = "";
        for (let i = 0; i < priceNum; i++) {
          priceRating += "$";
        }
        setDes(priceRating);
      } else {
        setDes(description);
      }
    }
  }, [description, tag]);

  return (
    <FlexBox
      sx={{
        flexDirection: "row",
        justifyContent: `${isMobile ? "space-between" : ""}`,
      }}
    >
      <Typography fontWeight="bold" fontSize="22px" textColor={fontColour}>
        {tag}:&nbsp;&nbsp;
      </Typography>
      {tag === "Google Rating" ? (
        <Rating initialValue={description} readonly fillColor="#fdd835" />
      ) : (
        <Typography fontSize="22px" textColor={fontColour}>
          {des}
        </Typography>
      )}
    </FlexBox>
  );
};

export default RestaurantDescriptionTag;
