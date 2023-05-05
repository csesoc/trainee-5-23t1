import { Typography } from "@mui/joy";
import * as React from "react";
import { FlexBox, fontColour } from "../utils/generalStyles";
import { useMediaQuery } from "react-responsive";

export const RestaurantDescriptionTag = ({ tag, description }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

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
      <Typography fontSize="22px" textColor={fontColour}>
        {description ?? ""}
      </Typography>
    </FlexBox>
  );
};

export default RestaurantDescriptionTag;
