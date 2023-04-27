import './App.css';
import RestaurantCard from "./components/RestaurantCard";
import { Grid } from '@mui/joy';

// padding for left and right of grid

function App() {
  // const mystyle = {
  //   padding: "20px",
  // };
  return (
    <div className="design" style={{ paddingLeft: 10, paddingRight: 10,marginLeft: 15, marginRight: 100}}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <RestaurantCard></RestaurantCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
