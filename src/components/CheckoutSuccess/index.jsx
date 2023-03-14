import { useEffect } from 'react';

export function CheckoutSuccess({ dispatch }) {
  useEffect(() => {
    return dispatch({ type: 'clearCart' });
  }, [dispatch]);
}
