import { Box, Typography, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  all: unset;
  display: 'block';
`;

export function EmptyCart() {
  return (
    <Box>
      <Typography sx={{ textAlign: 'center' }} variant='body1' component='p'>
        Your Cart is Empty.
      </Typography>

      <StyledLink to='/'>
        {' '}
        <Button sx={{ marginTop: 1 }} fullWidth variant='contained' color='secondary'>
          Go back to products
        </Button>
      </StyledLink>
    </Box>
  );
}
