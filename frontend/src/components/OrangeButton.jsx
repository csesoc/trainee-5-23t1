import React from "react";
import { primaryDarker, primaryMain } from "../utils/generalStyles";
import { Button } from "@mui/joy";

export const OrangeButton = (props) => {
  return (
    <Button
      type="submit"
      sx={{
        bgcolor: primaryMain,
        "&:hover": { bgcolor: primaryDarker },
      }}
    >
      {props.children}
    </Button>
  );
};
