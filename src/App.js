import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography variant='h2' sx={{
        pt: {
          xs: 9,
          sm: 16,
          md: 12,
        },
        fontWeight: 'bolder',
        fontSize: {
          xs: '2.5rem',
          sm: '3rem',
          md: '4rem',
        },
        fontFamily: 'cursive',
        lineHeight: {
          xs: '3.5rem',
          sm: '2rem',
          md: '3rem',
        }
      }} style={{ textAlign: "center" }}>Welcome to Yoga Classes</Typography>
      <Homepage />
    </div>
  );
}

export default App;
