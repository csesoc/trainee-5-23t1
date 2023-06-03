import * as React from "react";
import Searchbar from "../components/Searchbar";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack } from "@mui/joy";
import { primaryMain, primaryLight } from "../utils/generalStyles";
import Grid from "@mui/joy/Grid";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantModal from "../components/RestaurantModal";
import { storage } from "../utils/storage";

const HomePage = () => {
  const [openNewModal, setOpenNewModal] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState([]);
  const [localChange, setLocalChange] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [display, setDisplay] = React.useState([]);
  // update restaurants to be displayed when local storage is changed
  React.useEffect(() => {
    const data = storage.load();
    let temp = [];
    for (const res in data) {
      temp.push(res);
    }
    setRestaurants(temp);
  }, [localChange]);

  React.useEffect(() => {
    // when search is changed loop through all res, and put in display if match name or tag (suburb, cuisine, other)
    setDisplay([]);
    if (search === "") {
      setDisplay(restaurants);
    } else {
      for (const res_name of restaurants) {
        const res = storage.getRestaurant(res_name);
        if (
          res_name.toLowerCase().includes(search.toLowerCase()) ||
          res.tags.suburb.toLowerCase().includes(search.toLowerCase()) ||
          res.tags.cuisine.toLowerCase().includes(search.toLowerCase())
        ) {
          setDisplay((display) => [...display, res_name]);
        }
      }
    }
  }, [search, restaurants]);

  const handleAdd = () => {
    setOpenNewModal(true);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={4}>
      <RestaurantModal
        open={openNewModal}
        setOpen={setOpenNewModal}
        localChange={localChange}
        setLocalChange={setLocalChange}
      />
      <Stack mt="80px" direction="column" alignItems="center" spacing={4}>
        <IconButton
          onClick={handleAdd}
          sx={{
            bgcolor: primaryLight,
            color: primaryMain,
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            "&:hover": {
              bgcolor: primaryLight,
            },
            mb: "50px",
            border: "solid",
          }}
        >
          <AddIcon sx={{ fontSize: 60 }} />
        </IconButton>

        <Searchbar search={search} setSearch={setSearch} />
      </Stack>
      <Grid container spacing={2} sx={{ flexGrow: 1, width: "90%" }}>
        {display.map((res, i) => (
          <Grid
            xs={12}
            md={6}
            lg={4}
            xl={3}
            sx={{ display: "flex", justifyContent: "center" }}
            key={i}
          >
            <RestaurantCard res={storage.getRestaurant(res)} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HomePage;
