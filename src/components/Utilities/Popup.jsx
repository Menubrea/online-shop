import { Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

export function Popup({ state }) {
  const [isOpen, setIsOpen] = useState({
    open: false,
  });

  useEffect(() => {
    setIsOpen({
      open: true,
    });
  }, [state]);

  const handleClose = () => {
    setIsOpen({
      open: false,
    });
  };

  return [...state.cart].slice(-1).map((product) => {
    return <Snackbar autoHideDuration={2000} open={isOpen.open} message={`${product.title} added to cart`} onClose={handleClose} />;
  });
}
