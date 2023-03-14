import Price from '../Price';
import { Button, styled, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  all: unset;
  display: block;
`;

export function AddToCart({ data, dispatch, state }) {
  return (
    <>
      <Box sx={{ marginBottom: 1, backgroundColor: 'secondary.light' }}>
        <Price product={data} position='initial' />
      </Box>
      <Button
        sx={{ borderRadius: 0, backgroundColor: 'secondary.main', color: 'black.main' }}
        fullWidth
        variant='contained'
        onClick={() => dispatch({ type: 'addProduct', payload: data })}>
        Add to Cart
      </Button>
      {/* Display this if cart is not empty */}
      {state.cart.length > 0 && (
        <StyledLink to='/checkout'>
          <Button variant='outlined' sx={{ borderRadius: 0 }} fullWidth color='black'>
            To Checkout
          </Button>
        </StyledLink>
      )}
    </>
  );
}
