import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import AutoComplete from "./Autocomplete";
import { restaurantDefault, storage } from "../utils/storage";
import { Input, Stack } from "@mui/joy";

const RestaurantModal = ({ open, setOpen, localChange, setLocalChange }) => {
  const [place, setPlace] = React.useState("");
  const [cuisine, setCuisine] = React.useState("");
  const [embed, setEmbed] = React.useState("");

  // Takes an Australian address and returns object with { address, suburb, state, postcode }
  const getAddressParts = (address) => {
    const ADDRESS_REGEX =
      /(?<address>.+), (?<suburb>.+) (?<state>[A-Z]{2,3}) (?<postcode>\d{4}), Australia/;
    return address.match(ADDRESS_REGEX).groups;
  };

  const handleSubmit = () => {
    let service;

    const request = {
      query: place,
      fields: [
        "name",
        "place_id",
        "formatted_address",
        "photos",
        "price_level",
        "rating",
        "types",
        "geometry"
      ],
    };

    service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.findPlaceFromQuery(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results
      ) {
        const restaurant = results[0];
        const image = restaurant.photos[0].getUrl();
        const restaurant_data = restaurantDefault;
        restaurant_data.name = restaurant.name;
        restaurant_data.image = image
          ? image
          : "https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";
        restaurant_data.location = restaurant.formatted_address;
        restaurant_data.rating = restaurant.rating;
        restaurant_data.tags.suburb = getAddressParts(
          restaurant.formatted_address
        ).suburb;
        restaurant_data.tags.cuisine = cuisine;
        restaurant_data.priceRange = restaurant.price_level;
        restaurant_data.embed = embed;
        restaurant_data.place_id = restaurant.place_id;
        restaurant_data.geometry = place.geometry;

        const request = {
          placeId: restaurant.place_id,
          fields: ["url"],
        };

        function callback(place, status) {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            console.log(place.url);
            restaurant_data.googleMapsUrl = place.url;
            storage.setRes(restaurant_data);
            setLocalChange(!localChange);
          }
        }

        service.getDetails(request, callback);
        setOpen(false);
        setPlace("");
        setCuisine("");
        setEmbed("");
      }
    });
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog sx={{ maxWidth: 400 }}>
        <Stack gap={2}>
          <Typography component="h2">Add a new restaurant</Typography>
          <AutoComplete place={place} setPlace={setPlace} />
          <Typography component="h2">What cuisine is this?</Typography>
          <Input
            placeholder="e.g. Korean"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <Typography component="h2">
            How did you find this restaurant?
          </Typography>
          <Input
            placeholder="Embed a link! (e.g. TikTok, Youtube)"
            value={embed}
            onChange={(e) => setEmbed(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit}>
            Add
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default RestaurantModal;
