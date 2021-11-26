import { createTheme } from '@mui/material/styles';

 const ourtheme = createTheme({
  palette: {
    primary: { 
        light: '#7fd1ff',
        main: '#42a0f0',
        dark: '#0072bd',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#5fff81',
        main: '#00cb51',
        dark: '#009921',
        constrastText: '#ffffff'
    },
    neutral: {
        light: '#3f3a3a',
        main: '#191414',
        dark: '#000000',
    }
    
  },
});

export default ourtheme 




    