import { Box, Typography } from "@mui/joy";
import * as React from "react";
import { hoverStyle, primaryMain } from "../utils/generalStyles";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

export const NAVBAR_HEIGHT = "60px";

const navbarStyle = {
  height: NAVBAR_HEIGHT,
  width: "100%",
  position: "fixed",
  top: "0",
  bgcolor: primaryMain,
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
};

const Navbar = () => {
  const navigate = useNavigate();
  const homeButtonHandler = () => {
    navigate("/");
  };

  return (
    <Box sx={navbarStyle}>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        width="50px"
        height="50px"
        onClick={homeButtonHandler}
        sx={hoverStyle}
      />
      <Typography level="h3" textColor="white">
        MyRizztuarants
      </Typography>
    </Box>
  );
};

export default Navbar;
