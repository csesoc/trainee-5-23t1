import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantDefault, storage } from "../utils/storage";
import { Box, Typography } from "@mui/joy";
import { FlexBox, primaryLight } from "../utils/generalStyles";
import { NAVBAR_HEIGHT } from "../components/Navbar";
import { useMediaQuery } from "react-responsive";
import RestaurantDescriptionTag from "../components/RestaurantDescriptionTag";
import Tag from "../components/Tag";

export const DEFAULT_BANNER_HEIGHT = "27vh";
export const TIKTOK_VIDEO_WIDTH = "320px";

const RestaurantPage = () => {
  const navigate = useNavigate();
  const { resName } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 950px)" });

  const [resData, setResData] = useState(restaurantDefault);
  const [resTitle, setResTitle] = useState("");

  useEffect(() => {
    setResData(storage.getRestaurant(resName));
  }, [resName]);

  useEffect(() => {
    if (!resData) {
      navigate("/");
      return;
    }

    if (Object.keys(resData).length !== 0) {
      // convert title
      const title = Array.from(resData.name.split("_"))
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setResTitle(title);
    }
  }, [resData, navigate]);

  return (
    <Box>
      <FlexBox
        id="banner"
        sx={{ alignItems: "center" }}
        height={DEFAULT_BANNER_HEIGHT}
        bgcolor="grey"
      >
        <Box width="85%" m="0 auto">
          <Typography textColor="white" fontSize="8vh" fontWeight="bold">
            {resTitle}
          </Typography>
        </Box>
      </FlexBox>
      <Box
        bgcolor={primaryLight}
        height="100%"
        width={isTablet ? "100%" : "85%"}
        p="40px"
        m="0 auto"
        minHeight={`calc(100vh - ${DEFAULT_BANNER_HEIGHT} - ${NAVBAR_HEIGHT})`}
      >
        <FlexBox
          width={`${isMobile ? TIKTOK_VIDEO_WIDTH : "100%"}`}
          m={`${isMobile ? "0 auto" : ""}`}
          sx={{
            flexDirection: `${isMobile ? "column" : "row"}`,
            justifyContent: `${isMobile ? "" : "space-evenly"}`,
            gap: "15px",
          }}
        >
          <Box>
            <RestaurantDescriptionTag
              tag="Cuisine"
              description={resData.tags.cuisine}
            />
            <RestaurantDescriptionTag
              tag="Location"
              description={resData.location}
            />
            <RestaurantDescriptionTag
              tag="Price"
              description={resData.priceRange}
            />
            <RestaurantDescriptionTag tag="Google Rating" description={"3/5"} />

            <FlexBox gap="10px" marginTop="10px" flexWrap="wrap">
              <Tag>{resData.tags.cuisine}</Tag>
              <Tag>{resData.tags.suburb}</Tag>
              {Array.from(resData.tags.other).map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </FlexBox>
          </Box>

          <iframe
            style={{
              overflow: "hidden",
              border: "none",
              height: "575px",
              borderRadius: "5px",
              width: TIKTOK_VIDEO_WIDTH,
            }}
            scrolling="no"
            muted
            src={resData.embed}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </FlexBox>
      </Box>
    </Box>
  );
};

export default RestaurantPage;
