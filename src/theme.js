import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffccbc',
      dark: '#E6B8AA',
      light: '#ffd6c9',
    },
    secondary: {
      main: '#375C67',
      dark: '#32545D',
      light: '#C7D9E1',
    },
    white: {
      main: '#F5F5F5',
      dark: '#E0E0E0',
      light: '#fff',
    },
    black: {
      main: '#242424',
      dark: '#0D0D0D',
      light: '#424242',
    },
  },
  typography: {
    fontFamily: ['josefin-sans', 'sans-serif'].join(','),
  },
});
