import React, {useEffect, useRef} from 'react';
import {Stack} from "@mui/joy";

const AutoComplete = ( {place, setPlace }) => {

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "au" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };
    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
    }, []);
    return (
        <Stack pb={2}>
            <div>
                <input ref={inputRef} value={place} onInput={(e) => setPlace(e.target.value)}/>
            </div>
        </Stack>
    );
};
export default AutoComplete;