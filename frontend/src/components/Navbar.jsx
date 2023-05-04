import { Box } from "@mui/joy";
import * as React from "react";
import { primaryMain } from "../utils/generalStyles";

export const NAVBAR_HEIGHT = "60px";

const navbarStyle = {
  height: NAVBAR_HEIGHT,
  width: "100%",
  position: "fixed",
  top: "0",
  bgcolor: primaryMain,
  display: "flex",
  alignItems: "center",
};

const Navbar = () => {
  return <Box sx={navbarStyle}>Navbar</Box>;
};

export default Navbar;
