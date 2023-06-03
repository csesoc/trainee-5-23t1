import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantDefault, storage } from "../utils/storage";
import { Box, Typography } from "@mui/joy";
import {
  FlexBox,
  Hoverable,
  fontColour,
  primaryLight,
  primaryLighter,
} from "../utils/generalStyles";
import { NAVBAR_HEIGHT } from "../components/Navbar";
import { useMediaQuery } from "react-responsive";
import RestaurantDescriptionTag from "../components/RestaurantDescriptionTag";
import Tag from "../components/Tag";
import editIcon from "../assets/edit.svg";
import Map from "../components/Map";
import EditModal from "../components/EditModal";

export const DEFAULT_BANNER_HEIGHT = "40vh";
export const TIKTOK_VIDEO_WIDTH = "320px";

const RestaurantPage = () => {
  const navigate = useNavigate();
  const { resName } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 950px)" });

  const [resData, setResData] = useState(restaurantDefault);
  const [resTitle, setResTitle] = useState("");

  const [openEditModal, setOpenEditModal] = useState(false);

  const getElement = (ele, i) => {
    const key = Object.keys(ele)[0];
    const value = ele[key];

    if (key === "text") {
      return (
        <Typography level="p" fontSize="20px" key={i} textColor={fontColour}>
          {value}
        </Typography>
      );
    } else if (key === "image") {
      return (
        <Box height="350px" width="350px" m="10px auto" key={i}>
          <Box
            component="img"
            src={value}
            alt={`Element ${i}`}
            sx={{ objectFit: "cover" }}
            height="100%"
          />
        </Box>
      );
    }
  };

  const openEdit = () => {
    setOpenEditModal(true);
  };

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
      <EditModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        data={resData}
        setData={setResData}
      />
      <FlexBox
        id="banner"
        height={DEFAULT_BANNER_HEIGHT}
        bgcolor="grey"
        overflow="hidden"
        position="relative"
      >
        <Box width="85%" m="0 auto">
          <FlexBox
            zIndex="1"
            position="absolute"
            height="100%"
            alignItems="center"
            flexDirection="column-reverse"
            paddingBottom="20px"
          >
            <Typography
              textColor="white"
              fontSize="4vh"
              fontWeight="bold"
              sx={{ lineHeight: "90%" }}
            >
              {resData.location}
            </Typography>
            <Box sx={{ margin: "10px" }}></Box>
            <Typography
              textColor="white"
              fontSize="8vh"
              fontWeight="bold"
              sx={{ lineHeight: "90%" }}
            >
              {resTitle}
            </Typography>
          </FlexBox>
        </Box>

        {resData.image && (
          <Box
            component="img"
            src={resData.image}
            alt="Restaurant Image"
            position="absolute"
            height="100%"
            width="100%"
            zIndex="0"
            sx={{ objectFit: "cover", opacity: "0.6" }}
          />
        )}
      </FlexBox>

      <FlexBox
        bgcolor={primaryLighter}
        height="100%"
        width={isTablet ? "100%" : "85%"}
        p="40px"
        m="0 auto"
        minHeight={`calc(100vh - ${DEFAULT_BANNER_HEIGHT} - ${NAVBAR_HEIGHT})`}
        position="relative"
      >
        <Hoverable
          component="img"
          src={editIcon}
          alt="Edit page"
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            height: "50px",
          }}
          onClick={openEdit}
        />

        <Box
          maxWidth="1200px"
          width="100%"
          m="40px auto"
          p={isMobile ? "0" : "0 50px"}
        >
          <FlexBox
            width="100%"
            m={`${isMobile ? "0 auto" : ""}`}
            sx={{
              flexDirection: `${isMobile ? "column" : "row"}`,
              justifyContent: `${isMobile ? "" : "space-between"}`,
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
              <RestaurantDescriptionTag
                tag="Google Rating"
                description={resData.rating}
              />

              <FlexBox gap="10px" marginTop="10px" flexWrap="wrap">
                <Tag>{resData.tags.cuisine}</Tag>
                <Tag>{resData.tags.suburb}</Tag>
                {Array.from(resData.tags.other).map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </FlexBox>

              {/* commented cos it was causing an error when i reload */}
              {/* <Map /> */}
            </Box>

            {resData.embed ? (
              <iframe
                style={{
                  overflow: "hidden",
                  border: "none",
                  maxHeight: "575px",
                  borderRadius: "5px",
                  width: TIKTOK_VIDEO_WIDTH,
                  margin: "0 auto",
                }}
                scrolling="no"
                muted
                src={resData.embed}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            ) : (
              <FlexBox
                sx={{
                  width: TIKTOK_VIDEO_WIDTH,
                  bgcolor: primaryLight,
                  borderRadius: "5px",
                  height: "300px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography textColor={fontColour}>Add a video link</Typography>
              </FlexBox>
            )}
          </FlexBox>
          <Box height="80px"></Box>
          <Box
            bgcolor={primaryLight}
            position="absolute"
            left="0"
            width="50%"
            borderRadius="0 20px 20px 0"
          >
            <Typography
              textColor={fontColour}
              level="h2"
              sx={{ marginLeft: "45px", p: "15px 0" }}
            >
              Info
            </Typography>
          </Box>

          <FlexBox sx={{ flexDirection: "column", marginTop: "100px" }}>
            {Array.from(resData.elements).map((element, index) =>
              getElement(element, index)
            )}
          </FlexBox>
        </Box>
      </FlexBox>
    </Box>
  );
};

export default RestaurantPage;
