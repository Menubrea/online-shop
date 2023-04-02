import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ApiHook } from './API/ApiHook';
import { Layout } from './components/UI/Layout';
import { useReducer, useEffect } from 'react';
import { CartReducer, initialState } from './reducers/shoppingCartReducer';
import { Home } from './components/Home';
import CssBaseline from '@mui/material/CssBaseline';
import ProductPage from './components/Product';
import { Cart } from './components/Cart';
import { CheckoutSuccess } from './components/CheckoutSuccess';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { theme } from './theme';

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

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Layout state={state} dispatch={dispatch} />}>
          <Route index element={<Home data={data} state={state} dispatch={dispatch} />} />
          <Route path='/product/:id' element={<ProductPage data={data} state={state} dispatch={dispatch} />} />
          <Route path='/cart' element={<Cart data={data} state={state} dispatch={dispatch} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkoutSuccess' element={<CheckoutSuccess dispatch={dispatch} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
