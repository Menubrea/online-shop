import { Outlet, useLocation } from 'react-router-dom';
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
      <Outlet />
      <Footer />
    </>
  );
}
