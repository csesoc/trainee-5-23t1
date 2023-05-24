import * as React from 'react';
import Searchbar from '../components/Searchbar'
import AddIcon from '@mui/icons-material/Add';
import {IconButton, Stack} from '@mui/joy';
import { primaryMain, primaryLight } from "../utils/generalStyles";
import RestaurantCard from "../components/restaurantCard";
import RestaurantModal from "../components/Modal"


const HomePage = () => {
    const [openNewModal, setOpenNewModal] = React.useState(false);

    const handleAdd = () => {
        setOpenNewModal(true);
    }
    return (
        <Stack mt='60px' direction='column' alignItems='center' spacing={4}>
            <RestaurantModal
                open={openNewModal}
                setOpen={setOpenNewModal}
            />
            <Stack mt='100px' direction='column' alignItems='center' spacing={4}>
                <IconButton
                  onClick={handleAdd}
                  sx={{
                    bgcolor: primaryLight,
                    color: primaryMain,
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    "&:hover": {
                      bgcolor: primaryLight
                    }
                  }}>
                    <AddIcon sx={{ width: '50px' }}/>
                </IconButton>

                <Searchbar/>
            </Stack>
            <Stack direction='row' flexWrap='wrap' justifyContent='space-evenly' gap={4}>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </Stack>
      </Stack>
      );

};

export default HomePage;
