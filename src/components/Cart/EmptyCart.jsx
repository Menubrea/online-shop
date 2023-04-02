import { Box, Button, styled, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  all: unset;
  display: 'block';
`;

/**
 * Component for rendering content for an Empty Cart
 * @returns EmptyCart
 */
export function EmptyCart() {
  return (
    <Box>
      <Alert severity='info'>Your Cart is Empty.</Alert>

      <StyledLink to='/'>
        {' '}
        <Button sx={{ marginTop: 1 }} variant='contained' color='primary'>
          Go back to products
        </Button>
      </StyledLink>
    </Box>
  );
}
