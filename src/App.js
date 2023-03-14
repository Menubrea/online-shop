import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ApiHook } from './API/ApiHook';
import { Layout } from './components/UI/Layout';
import { useReducer, useEffect } from 'react';
import { CartReducer, initialState } from './reduces/shoppingCartReducer';
import { Home } from './components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import ProductPage from './components/Product';
import { Checkout } from './components/Checkout';
import { CheckoutSuccess } from './components/CheckoutSuccess';
import { Container } from '@mui/material';
import Image from 'mui-image';
import loading from '../src/assets/loading.gif';

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
  const { data, isLoading } = ApiHook(url);
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

  if (isLoading) {
    return (
      <Container sx={{ minHeight: '100vh', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={loading} height={500} width={500} />
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Routes>
          <Route path='/' element={<Layout state={state} dispatch={dispatch} />}>
            <Route index element={<Home data={data} state={state} dispatch={dispatch} />} />
            <Route path='/product/:id' element={<ProductPage data={data} state={state} dispatch={dispatch} />} />
            <Route path='/checkout' element={<Checkout data={data} state={state} dispatch={dispatch} />} />
            <Route path='/checkoutSuccess' element={<CheckoutSuccess dispatch={dispatch} />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
