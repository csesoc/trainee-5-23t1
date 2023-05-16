import './App.css';
import RestaurantCard from "./components/restaurantCard";
import { Grid } from '@mui/joy';

// comments:
// structured so that three cards fit per row
// spacing between cards at max window screen has issues

function App() {
  return (
    <div className="design" style={{ paddingLeft: 10, paddingRight: 10, marginLeft: 15, marginRight: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        {/* three per row at max window size */}
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
        <RestaurantCard></RestaurantCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
