import logo from './logo.svg';
import './App.css';
import RestaurantCard from "./components/RestaurantCard";
import Stack from '@mui/joy/Stack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* scroll down to see the restaurant card example: */}
      {/* note a maximum of 4 cards per stack, excluding any border requirements */}
      
      <Stack direction="row" spacing={2}>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </Stack>
      {/* can't find a way to have spacing between rows w/o using <br></br> */}
      <br></br> 
      <Stack direction="row" spacing={2}>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </Stack>
    </div>
  );
}

export default App;
