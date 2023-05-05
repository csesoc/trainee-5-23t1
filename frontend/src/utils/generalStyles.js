import styled from "@emotion/styled";
import { Box } from "@mui/joy";

export const primaryMain = "#FCAB5F";
export const primaryLight = "#FFCFA3";

export const FlexBox = styled(Box)({
  display: "flex",
});

export const Hoverable = styled(Box)({
  "&:hover": {
    cursor: "pointer",
  },
});
