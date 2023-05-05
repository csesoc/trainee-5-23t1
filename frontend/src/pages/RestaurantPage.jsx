import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../utils/storage";
import { Box, Typography } from "@mui/joy";
import { centerInDivStyle, primaryLight } from "../utils/generalStyles";
import { NAVBAR_HEIGHT } from "../components/Navbar";

const DEFAULT_BANNER_HEIGHT = "27vh";

const RestaurantPage = () => {
  const navigate = useNavigate();
  const { resName } = useParams();

  const [resData, setResData] = useState({});
  const [resTitle, setResTitle] = useState("");

  useEffect(() => {
    setResData(storage.getRestaurant(resName));
  }, [resName]);

  useEffect(() => {
    if (!resData) {
      navigate("/");
      return;
    }
    // convert title
    const title = Array.from(resData.name.split("_"))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setResTitle(title);
  }, [resData, navigate]);

  return (
    <Box>
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        height={DEFAULT_BANNER_HEIGHT}
        bgcolor="grey"
      >
        <Box width="85%" m="0 auto">
          <Typography textColor="white" fontSize="8vh" fontWeight="bold">
            {resTitle}
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={primaryLight}
        height="100%"
        width="85%"
        p="0 40px"
        m="0 auto"
        minHeight={`calc(100vh - ${DEFAULT_BANNER_HEIGHT} - ${NAVBAR_HEIGHT})`}
      >
        <Box sx={centerInDivStyle}>a</Box>
      </Box>
    </Box>
  );
};

export default RestaurantPage;
