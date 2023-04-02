import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, CardHeader, Fab, Typography, CardContent, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ShoppingCart({ state, dispatch }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      {isShown && state.cart.length > 0 && <CartModal state={state} dispatch={dispatch} isShown={isShown} setIsShown={setIsShown} />}
      {state.cart.length > 0 && (
        <Fab aria-label='Cart' color='secondary' sx={{ position: 'fixed', bottom: 16, right: 16 }} onClick={() => setIsShown(true)}>
          <Badge badgeContent={state.cart.reduce((acc, product) => acc + product.quantity, 0)} color='black' max={9}>
            <ShoppingCartIcon />
          </Badge>
        </Fab>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  all: unset;
  display: block;
`;

const StyledBox = styled(Box)`
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export function CartModal({ state, dispatch, isShown, setIsShown }) {
  return (
    <>
      {isShown && state.cart.length > 0 && (
        <StyledBox
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            minWidth: 300,
            width: { xs: 'calc(100% - 32px)', sm: 'fit-content' },
            zIndex: 100,
            backgroundColor: 'white',
            padding: 2,
            borderRadius: 1,
          }}>
          <Button
            variant='contained'
            sx={{
              borderRadius: 0,
            }}
            fullWidth
            onClick={() => dispatch({ type: 'clearCart' })}>
            Clear Cart
          </Button>
          {state.cart.map((product) => {
            return (
              <Box
                key={product.id}
                sx={{
                  backgroundColor: 'white.main',
                }}>
                <CardHeader
                  title={product.title}
                  sx={{ margin: 0, paddingTop: 1, paddingBottom: 0 }}
                  titleTypographyProps={{
                    fontWeight: 700,
                    color: 'black.light',
                    fontSize: 16,
                    textAlign: 'right',
                  }}
                />
                <CardContent sx={{ paddingY: 0, paddingBottom: 1, display: 'flex', justifyContent: 'end' }}>
                  <Typography variant='body2' sx={{ textAlign: 'right' }}>
                    {product.discountedPrice} kr x
                  </Typography>
                  <Typography variant='body2'> {product.quantity}</Typography>
                </CardContent>
                <Divider />
              </Box>
            );
          })}
          <Box
            sx={{
              padding: 1,
              backgroundColor: 'white.dark',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography variant='body1'>Total:</Typography> <Typography variant='body2'>{state.total.toFixed(2)} kr</Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: 1, gap: 1, justifyContent: 'right' }}>
            <Button variant='contained' sx={{ backgroundColor: 'black.light', color: 'white.main' }} onClick={() => setIsShown(false)}>
              Continue Shopping
            </Button>
            <StyledLink to='/checkout'>
              <Button variant='contained' sx={{ backgroundColor: 'secondary.dark', color: 'white.main' }}>
                Checkout
              </Button>
            </StyledLink>
          </Box>
        </StyledBox>
      )}
    </>
  );
}
