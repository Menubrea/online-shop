import { Box, Container, Typography, Button, styled, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { StoreInformation } from '../StoreInformation';
import { CartContent } from './CartContent';
import { EmptyCart } from './EmptyCart';
import { CartPurchase } from './CartPurchase';
import { MetaData } from '../MetaData';

const StyledLink = styled(Link)`
  all: unset;
  display: 'block';
`;

const StyledBox = styled(Box)`
  animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);

  article:nth-of-type(2) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.1s;
  }
  article:nth-of-type(3) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.2s;
  }
  article:nth-of-type(4) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.3s;
  }
  article:nth-of-type(5) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.4s;
  }
  article:nth-of-type(6) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.5s;
  }
  article:nth-of-type(7) {
    animation: slideIn 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.25);
    animation-delay: 0.6s;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }

    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion) {
    animation: 0ms !important;
  }
`;

export function Cart({ state, dispatch }) {
  return (
    <Box component='main'>
      <MetaData title='Re:mote | Your Cart' description='View your Cart' tags='Re:mote, Cart, Shopping, your items' />
      <Container
        sx={{
          marginY: 2,
          padding: 2,
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}>
        <Box sx={{ gridColumn: { xs: '1 / 4', md: '1 / 3' }, height: 'max-content' }}>
          {state.cart.length > 0 && (
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant='h4' component='h1' sx={{ textAlign: 'left', fontFamily: 'arbotek', fontWeight: 900, color: 'secondary.dark' }}>
                Your Cart
              </Typography>
              <Divider />
            </Box>
          )}
          <StyledBox>
            {/* Display Cart content if cart has content, else show content for empty cart */}
            {state.cart.length > 0 ? <CartContent state={state} dispatch={dispatch} /> : <EmptyCart />}
          </StyledBox>
        </Box>
        {/* Container for Price, total and purchase interaction*/}
        <Box sx={{ backgroundColor: 'white.main', padding: 2, height: 'fit-content', gridColumn: { xs: '1 / 4', md: '3 / 4' } }}>
          {state.cart.length > 0 && (
            <Box sx={{ marginBottom: 1 }}>
              <Typography>You're about to purchase:</Typography>
              <Divider />
            </Box>
          )}
          {/* Display product name, price and quantity, else display empty cart */}
          {state.cart.length > 0 ? <CartPurchase state={state} /> : <Typography variant='body1'>Cart is empty</Typography>}
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between ', marginTop: 1 }}>
            <Typography>Total:</Typography>
            <Typography sx={{ textAlign: 'right' }}>{state.total.toFixed(2)},-</Typography>
          </Box>

          {state.cart.length > 0 && (
            <StyledLink to='/checkoutsuccess'>
              <Button fullWidth variant='contained'>
                Purchase
              </Button>
            </StyledLink>
          )}
        </Box>
      </Container>
      <Divider />
      <Container
        sx={{
          display: {
            md: 'flex',
            sm: 'block',
          },
        }}>
        <StoreInformation />
      </Container>
    </Box>
  );
}
