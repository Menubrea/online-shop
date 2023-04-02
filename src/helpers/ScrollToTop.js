import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// From: https://www.matthewhoelter.com/2022/04/02/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6.html

/**
 * Helper function which sets location of the page back to top.
 * @returns null
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}
