import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ShoppingCart } from './ShoppingCart';

/**
 * Component for setting layout of application using react-router-dom
 * @returns layout of application
 */
export function Layout({ state, dispatch }) {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname !== '/cart' && <ShoppingCart state={state} dispatch={dispatch} />}
      <Outlet />
      <Footer />
    </>
  );
}
