import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import AutoComplete from "./Autocomplete";

const RestaurantModal = ({ open, setOpen }) => {
    const [place, setPlace] = React.useState('');
    const handleSubmit = async () => {
        console.log(place);
        let service;

        const request = {
            query: place,
            fields: ["name", "place_id", "formatted_address", "photos", "price_level", "rating", "types"],
        };

        service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                console.log(results[0]);

            }
        });


    }
    return (
        <Modal open={open} onClose={() => setOpen(false)} >
            <ModalDialog
                sx={{ maxWidth: 300}}
            >
                <Typography id="add-new-restaurant" component="h2" pb={2}>
                    Add a new restaurant
                </Typography>
                <AutoComplete place={place} setPlace={setPlace}/>
                <Button type="submit" onClick={handleSubmit}>Add</Button>
            </ModalDialog>
        </Modal>
    );
}

export default RestaurantModal;