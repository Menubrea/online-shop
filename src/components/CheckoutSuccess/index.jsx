import { useEffect, useState } from 'react';
import Image from 'mui-image';
import { Box, Container, styled, Typography, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import loading from '../../assets/loading.gif';
import checkmark from '../../assets/checkmark.gif';
import { MetaData } from '../MetaData';

const StyledMain = styled(Box)`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh);
  padding: 2em;
`;

const UnLink = styled(Link)`
  all: unset;
  display: block;
`;

const StyledContainer = styled(Container)`
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 1em;
  background-color: #ffffff;
  border-radius: 1em;
`;

const StyledBox = styled(Box)`
  animation: show 1.5s ease-in;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const EaseOutBox = styled(Box)`
  padding: 2em;
  animation: hide 5.1s ease-in;

  @keyframes hide {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 0.8;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

/**
 * Main component for simulating checkout
 * @param {*} dispatch
 * @returns clears content of state.cart and renders html that simulates a checkout process
 */
export function CheckoutSuccess({ dispatch }) {
  const [isProcessing, setIsProcessing] = useState(true);

  // Simulating a network request by rendering different content depending on state of isProccessing.
  useEffect(() => {
    setTimeout(() => {
      setIsProcessing(false);
    }, 5000);
  }, []);

  // Clears cart
  useEffect(() => {
    return dispatch({ type: 'clearCart' });
  }, [dispatch]);

  return (
    <StyledMain sx={{ backgroundColor: 'black.light' }} component='main'>
      <MetaData title='Re:mote | Checkout' description='Checkout at Re:mote' />
      {/* Render this content while isProcessing is true */}
      <StyledContainer>
        {isProcessing ? (
          <EaseOutBox sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative', overflow: 'hidden' }}>
            <Image height={80} width={80} sx={{ borderRadius: 100 }} src={loading} />
            <Typography sx={{ marginRight: 2 }} variant='h6'>
              Processing your order.
            </Typography>
          </EaseOutBox>
        ) : (
          <StyledBox>
            {/* Render this content while isProcessing is false */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginX: 'auto', width: 'fit-content', marginBottom: 1 }}>
              <Image height={80} width={80} sx={{ borderRadius: 100 }} src={checkmark} />
              <Typography variant='h6'>Success!</Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            <Typography color='secondary.dark' variant='body1'>
              Order number: 20023388123
            </Typography>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan quam nec consectetur iaculis. Sed scelerisque odio sit amet purus
              iaculis, et facilisis arcu mollis. Pellentesque velit odio, convallis et.{' '}
            </Typography>
            <UnLink to='/'>
              <Button sx={{ marginTop: 1 }} variant='contained' fullWidth>
                Take me back home
              </Button>
            </UnLink>
          </StyledBox>
        )}
      </StyledContainer>
    </StyledMain>
  );
}
