import { Typography } from "@mui/joy";
import * as React from "react";

export const Tag = (props) => {
  return (
    <Typography
      sx={{
        bgcolor: "#AAAAAA80",
        borderRadius: "15px",
        border: "1px solid #AAA",
        p: "0 15px",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default Tag;
