import logo from './logo.svg';
import './App.css';
import RestaurantCard from "./components/RestaurantCard";
import Stack from '@mui/joy/Stack';

function App() {
  return (
    <div className="App">
      {/* scroll down to see the restaurant card example: */}
      {/* note a maximum of 4 cards per stack, excluding any border requirements */}
      
      <Stack direction="row" justifyContent="center" spacing={2}>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </Stack>
      {/* can't find a way to have spacing between rows w/o using <br></br> */}
      <br></br> 
      <Stack direction="row" justifyContent="center" spacing={2}>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </Stack>


    </div>
  );
}

export default App;
