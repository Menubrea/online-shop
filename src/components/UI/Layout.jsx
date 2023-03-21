import { Outlet, useLocation } from 'react-router-dom';
import { Popup } from '../Utilities/Popup';
import { Footer } from './Footer';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';

export function Layout({ state, dispatch }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Header />
      {pathname !== '/checkout' && <ShoppingCart state={state} dispatch={dispatch} />}
      {pathname !== '/checkout' && <Popup state={state} />}
      <Outlet />
      <Footer />
    </>
  );
}
