import * as React from 'react';
import Searchbar from '../components/Searchbar'
import AddIcon from '@mui/icons-material/Add';
import {IconButton, Stack} from '@mui/joy';
import { primaryMain, primaryLight } from "../utils/generalStyles";
import Grid from '@mui/joy/Grid';
import RestaurantCard from "../components/restaurantCard";
import RestaurantModal from "../components/Modal"
import { storage } from "../utils/storage";

const HomePage = () => {
    const [openNewModal, setOpenNewModal] = React.useState(false);
    const [restaurants, setRestaurants] = React.useState([])
    const [localChange, setLocalChange] = React.useState(false);

    React.useEffect(() => {
        const data = storage.load();
        let temp = [];
        for (const res in data) {
            temp.push(res)
        }
        setRestaurants(temp);
    }, [localChange]);

    const handleAdd = () => {
        setOpenNewModal(true);
    }



    return (
        <Stack direction='column' alignItems='center' spacing={4}>
            <RestaurantModal
                open={openNewModal}
                setOpen={setOpenNewModal}
                localChange={localChange}
                setLocalChange={setLocalChange}
            />
            <Stack mt='80px' direction='column' alignItems='center' spacing={4}>
                <IconButton
                  onClick={handleAdd}
                  sx={{
                    bgcolor: primaryLight,
                    color: primaryMain,
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    "&:hover": {
                      bgcolor: primaryLight
                    },
                    mb: '50px',
                    border: 'solid'
                  }}>
                    <AddIcon  sx={{ fontSize: 60 }}/>
                </IconButton>

                <Searchbar/>
            </Stack>
                <Grid container spacing={2} sx={{ flexGrow: 1, width: '90%'}}>
                    {restaurants.map((res) => (
                        <Grid xs={12} md={6} lg={4} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <RestaurantCard res={storage.getRestaurant(res)}/>
                        </Grid>)
                    )}
                </Grid>

      </Stack>
      );

};

export default HomePage;
