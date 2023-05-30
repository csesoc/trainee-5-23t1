import * as React from 'react';
import Searchbar from '../components/Searchbar'
import AddIcon from '@mui/icons-material/Add';
import {IconButton, Stack} from '@mui/joy';
import { primaryMain, primaryLight } from "../utils/generalStyles";
import Grid from '@mui/joy/Grid';
import RestaurantCard from "../components/restaurantCard";
import RestaurantModal from "../components/Modal"


const HomePage = () => {
    const [openNewModal, setOpenNewModal] = React.useState(false);

    const handleAdd = () => {
        setOpenNewModal(true);
    }
    return (
        <Stack direction='column' alignItems='center' spacing={4}>
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
                    width: '100px',
                    height: '100px',
                    "&:hover": {
                      bgcolor: primaryLight
                    },
                    mb: '60px'
                  }}>
                    <AddIcon  sx={{ fontSize: 60 }}/>
                </IconButton>

                <Searchbar/>
            </Stack>
                <Grid container spacing={2} sx={{ flexGrow: 1, width: '90%'}}>
                    <Grid xs={12} md={6} lg={4} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <RestaurantCard/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <RestaurantCard/>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <RestaurantCard/>
                    </Grid>

                </Grid>

      </Stack>
      );

};

export default HomePage;
