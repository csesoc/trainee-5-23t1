import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Input, Stack} from "@mui/joy";

const Searchbar = ({ search, setSearch }) => {

    return (
        <Stack width={{ sx: '300px', md: '600px' }}>
            <Input
                startDecorator={<SearchIcon/>}
                variant="soft"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your restaurants..."
                size="lg"
                sx={{ borderRadius: "100px", p: "20px" }}
            >
            </Input>

        </Stack>
    );
}

export default Searchbar;