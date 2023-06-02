import styled from "@emotion/styled";
import { Box } from "@mui/joy";

export const primaryMain = "#FCAB5F";
export const primaryDarker = "#c9884b";
export const primaryLight = "#ffd5a3";
export const primaryLighter = "#FFECDA";
export const fontColour = "#42260B";

export const FlexBox = styled(Box)({
  display: "flex",
});

export const Hoverable = styled(Box)({
  "&:hover": {
    cursor: "pointer",
  },
});
