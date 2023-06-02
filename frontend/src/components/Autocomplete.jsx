import React from "react";
import {
  Autocomplete,
  AutocompleteOption,
  ListItemContent,
  Stack,
} from "@mui/joy";
import Typography from "@mui/joy/Typography";

const AutoComplete = ({ place, setPlace }) => {
  const [options, setOptions] = React.useState([]);
  const service = new window.google.maps.places.AutocompleteService();

  return (
    <Autocomplete
      inputValue={place}
      onInputChange={(e, value) => {
        setPlace(value);
        if (!value) {
          setOptions([]);
        } else {
          service
            .getPlacePredictions({
              input: value,
              componentRestrictions: { country: "au" },
              types: ["restaurant"],
            })
            .then(({ predictions }) => setOptions(predictions));
        }
      }}
      placeholder="Enter a restaurant"
      slotProps={{
        input: {
          autoComplete: "new-password", // disable autocomplete and autofill
        },
        listbox: {
          sx: {
            zIndex: 1000000000000,
          },
        },
      }}
      sx={{ width: 300 }}
      options={options}
      autoHighlight
      freeSolo
      isOptionEqualToValue={(option, value) =>
        option.structured_formatting.main_text ===
        value.structured_formatting.main_text
      }
      getOptionLabel={(option) => option.structured_formatting.main_text}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemContent sx={{ fontSize: "sm" }}>
            {option.structured_formatting.main_text}
            <Typography level="body3">
              {option.structured_formatting.secondary_text}
            </Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
  );
};
export default AutoComplete;
