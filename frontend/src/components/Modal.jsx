import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import AutoComplete from "./Autocomplete";

const RestaurantModal = ({ open, setOpen }) => {
    const [place, setPlace] = React.useState('');
    const handleSubmit = () => {
        console.log(place);
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