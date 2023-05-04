import { Box } from "@mui/joy";
import * as React from "react";

export const NAVBAR_HEIGHT = "60px";

const navbarStyle = {
  height: NAVBAR_HEIGHT,
};

const Navbar = () => {
  return (
    <Box sx={navbarStyle}>
      <navbar>Navbar</navbar>
    </Box>
  );
};

export default Navbar;
