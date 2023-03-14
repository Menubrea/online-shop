import { useEffect, useState } from 'react';
import Image from 'mui-image';
import { Box, Container, styled, Typography, Divider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import loading from '../../assets/loading.gif';
import checkmark from '../../assets/checkmark.gif';

const UnLink = styled(Link)`
  all: unset;
  display: block;
`;

const StyledContainer = styled(Container)`
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  padding: 2em;
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

export function CheckoutSuccess({ dispatch }) {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsProcessing(false);
    }, 5000);
  }, []);

  useEffect(() => {
    return dispatch({ type: 'clearCart' });
  }, [dispatch]);

  return (
    <Box sx={{ minHeight: '90vh', display: 'grid', justifyContent: 'center', alignItems: 'center' }} component='main'>
      <StyledContainer>
        {isProcessing ? (
          <EaseOutBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Image height={80} width={80} sx={{ borderRadius: 100 }} src={loading} />
            <Typography variant='h6'>Processing your order.</Typography>
          </EaseOutBox>
        ) : (
          <StyledBox>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginX: 'auto', width: 'fit-content', marginBottom: 1 }}>
              <Image height={80} width={80} sx={{ borderRadius: 100 }} src={checkmark} />
              <Typography variant='h6'>Your order was successful!</Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            <Typography variant='body1'>Order number: 20023388123</Typography>
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
    </Box>
  );
}
