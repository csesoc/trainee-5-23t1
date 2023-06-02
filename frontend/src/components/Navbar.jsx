import { Typography } from "@mui/joy";
import * as React from "react";
import { FlexBox, Hoverable, primaryMain } from "../utils/generalStyles";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

export const NAVBAR_HEIGHT = "55px";

const navbarStyle = {
  height: NAVBAR_HEIGHT,
  width: "100%",
  position: "fixed",
  top: "0",
  bgcolor: primaryMain,
  alignItems: "center",
  padding: "0 20px",
  zIndex: "3",
    boxShadow: 'sm'
};

const Navbar = () => {
  const navigate = useNavigate();
  const homeButtonHandler = () => {
    navigate("/");
  };

  return (
    <FlexBox sx={navbarStyle}>
      <Hoverable
        component="img"
        src={logo}
        alt="Logo"
        width="50px"
        height="50px"
        onClick={homeButtonHandler}
      />
      <Typography level="h3" textColor="white">
        MyRizztuarants
      </Typography>
    </FlexBox>
  );
};

export default Navbar;
