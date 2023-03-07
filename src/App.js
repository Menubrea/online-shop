import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ApiHook } from './API/ApiHook';
import { Layout } from './components/UI/Layout';
import { useReducer, useEffect } from 'react';
import { CartReducer, initialState } from './reduces/shoppingCartReducer';
import { Home } from './components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import ProductPage from './components/Product';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffccbc',
      dark: '#b28e83',
      light: '#ffd6c9',
    },
    secondary: {
      main: '#72A0B3',
      dark: '#4f707d',
      light: '#8eb3c2',
    },
    white: {
      main: '#F5F5F5',
      dark: '#E0E0E0',
      light: '#fff',
    },
    black: {
      main: '#242424',
      dark: '#0D0D0D',
      light: '#636363',
    },
  },
  typography: {
    fontFamily: ['josefin-sans', 'sans-serif'].join(','),
  },
});

const url = 'https://api.noroff.dev/api/v1/online-shop/';

function App() {
  const { data, isLoading, isError } = ApiHook(url);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(['state'], JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('state'));

    if (storedData) {
      return dispatch({ type: 'storedCart', payload: storedData });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Routes>
          <Route
            path='/'
            element={<Layout state={state} dispatch={dispatch} />}
          >
            <Route
              index
              element={<Home data={data} state={state} dispatch={dispatch} />}
            />
            <Route path='/product/:id' element={<ProductPage />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
