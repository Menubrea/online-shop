import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';

export function Layout({ state, dispatch }) {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname !== '/checkout' && <ShoppingCart state={state} dispatch={dispatch} />}
      <Outlet />
      <Footer />
    </>
  );
}
