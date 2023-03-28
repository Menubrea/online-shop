import Price from '../ProductComponents/Price';
import { Button, styled, Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  all: unset;
  display: block;
`;

export function AddToCart({ data, dispatch, state }) {
  return (
    <>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white.main', padding: 1, borderRadius: 0.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Price:</Typography>
          <Price product={data} position='initial' />
        </Box>
        <Divider sx={{ marginBottom: 0.5 }} />
        <Typography variant='body2' textAlign={'end'}>
          Free Shipping
        </Typography>
      </Box>
      <Button sx={{ borderRadius: 0 }} fullWidth variant='contained' onClick={() => dispatch({ type: 'addProduct', payload: data })}>
        Add to Cart
      </Button>
      {/* Display this if cart is not empty */}
      {state.cart.length > 0 && (
        <StyledLink to='/checkout'>
          <Button variant='contained' sx={{ borderRadius: 0 }} fullWidth color='white'>
            To Checkout
          </Button>
        </StyledLink>
      )}
    </>
  );
}
