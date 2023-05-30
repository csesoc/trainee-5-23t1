import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import AutoComplete from "./Autocomplete";
import { restaurantDefault, storage } from "../utils/storage";
import {Input, Stack} from "@mui/joy";
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportIcon from '@mui/icons-material/Report';

const RestaurantModal = ({ open, setOpen }) => {
    const [place, setPlace] = React.useState('');
    const [cuisine, setCuisine] = React.useState('');
    const [embed, setEmbed] = React.useState('')

    const handleSubmit = async () => {
        let service;

        const request = {
            query: place,
            fields: ["name", "place_id", "formatted_address", "photos", "price_level", "rating", "types"],
        };

        service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                const restaurant = results[0]
                const image = restaurant.photos[0].getUrl();
                let restaurant_data = restaurantDefault;
                restaurant_data.name = restaurant.name;
                restaurant_data.image = image;
                restaurant_data.location = restaurant.formatted_address;
                restaurant_data.rating = restaurant.rating;
                restaurant_data.tags.suburb = ''
                restaurant_data.tags.cuisine = cuisine;

                storage.addNewRes(restaurant_data);
                console.log('added res')
            }
        })

    }


    return (
        <Modal open={open} onClose={() => setOpen(false)} >
            <ModalDialog
                sx={{ maxWidth: 400}}
            >
                <Stack gap={2}>
                    <Typography component="h2">
                        Add a new restaurant
                    </Typography>
                    <AutoComplete place={place} setPlace={setPlace}/>
                    <Typography component="h2">
                        What cuisine is this?
                    </Typography>
                    <Input placeholder='e.g. Korean' value={cuisine} onChange={(e) => setCuisine(e.target.value)}/>
                    <Typography component="h2">
                        Where did you find this restaurant?
                    </Typography>
                    <Input placeholder='Embed a link! e.g. TikTok' value={embed} onChange={(e) => setEmbed(e.target.value)}/>
                    <Button type="submit" onClick={handleSubmit}>Add</Button>
                </Stack>
            </ModalDialog>
        </Modal>
    );
}

export default RestaurantModal;