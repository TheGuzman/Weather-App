import * as React from 'react';
import WeatherPage from './pages/weather-page.jsx';
import  ourtheme   from './create-theme.js';
import { ThemeProvider } from '@mui/material/styles';



function App() {
  return (
    <React.Fragment>

     <ThemeProvider theme={ourtheme}>
       <WeatherPage></WeatherPage>
       </ThemeProvider>
    </React.Fragment>
  );
}

export default App
