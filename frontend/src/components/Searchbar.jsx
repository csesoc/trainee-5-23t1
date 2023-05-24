import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Input, Stack} from "@mui/joy";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Searchbar = () => {

    return (
        <Stack width="600px">
            <Input
                startDecorator={<SearchIcon/>}
                endDecorator={<ArrowDropDownIcon/>}
                variant="soft"
                placeholder="Search your restaurants..."
                size="lg"
                sx={{ borderRadius: "100px", p: "20px" }}
            >
            </Input>

        </Stack>
    );
}

export default Searchbar;