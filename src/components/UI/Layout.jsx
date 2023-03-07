import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';

export function Layout({ state, dispatch }) {
  return (
    <>
      <Header />
      <ShoppingCart state={state} dispatch={dispatch} />
      <Outlet />
      <Footer />
    </>
  );
}
