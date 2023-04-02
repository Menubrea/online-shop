import Price from '../ProductComponents/Price';
import { Button, styled, Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const StyledLink = styled(Link)`
  all: unset;
  display: block;
`;

/**
 * Adding to Cart component for product page.
 * @param {*}
 * @returns Price, add to cart interaction and cart link
 */
export function AddToCart({ data, dispatch, state }) {
  return (
    <>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white.main', padding: 1, borderRadius: 0.5 }}>
        {/* Product Price */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Price:</Typography>
          <Price product={data} position='initial' />
        </Box>
        <Divider sx={{ marginBottom: 0.5 }} />
        <Typography variant='body2' textAlign={'end'}>
          Free Shipping
        </Typography>
      </Box>

      {/* Add to Cart Button */}
      <Button
        sx={{ borderRadius: 0, backgroundColor: 'primary.light', color: 'black.light' }}
        startIcon={<AddShoppingCartRoundedIcon />}
        fullWidth
        variant='contained'
        onClick={() => dispatch({ type: 'addProduct', payload: data })}>
        Add to Cart
      </Button>

      {/* Display link to cart if cart is not empty */}
      {state.cart.length > 0 && (
        <StyledLink to='/cart'>
          <Button
            startIcon={<ShoppingBagIcon />}
            variant='contained'
            sx={{ borderRadius: 0, backgroundColor: 'secondary.dark', color: 'white.light' }}
            fullWidth>
            View Cart
          </Button>
        </StyledLink>
      )}
    </>
  );
}
