import { Box, Container, Typography, Button, styled, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from 'mui-image';
import { StoreInformation } from '../StoreInformation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const StyledLink = styled(Link)`
  all: unset;
  display: 'block';
`;

export function Checkout({ state, dispatch }) {
  return (
    <Box component='main'>
      <Container
        sx={{
          marginY: 2,
          padding: 2,
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}>
        <Box sx={{ gridColumn: '1 / 3', height: 'max-content' }}>
          {state.cart.length > 0 && (
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant='h4' component='h1' sx={{ textAlign: 'left', fontFamily: 'arbotek', fontWeight: 900, color: 'secondary.dark' }}>
                Your Cart
              </Typography>
              <Divider />
            </Box>
          )}
          {state.cart.length > 0 ? (
            state.cart.map((product) => {
              return (
                <Box key={product.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Image src={product.imageUrl} title={product.title} height={80} width={80} />
                    <Box sx={{ padding: 2 }}>
                      <Typography variant='h6' component='h2'>
                        {product.title}
                      </Typography>
                      <Typography>{product.description}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton onClick={() => dispatch({ type: 'addProduct', payload: product })} variant='contained'>
                      <AddCircleIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatch({ type: 'removeProduct', payload: product })} variant='contained'>
                      <RemoveCircleIcon />
                    </IconButton>
                  </Box>
                </Box>
              );
            })
          ) : (
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
          )}
        </Box>
        <Box sx={{ backgroundColor: 'white.main', padding: 2, height: 'fit-content' }}>
          {state.cart.length > 0 ? (
            state.cart.map((product) => {
              return (
                <Box key={product.id} sx={{ display: 'flex', justifyContent: 'space-between ' }}>
                  <Typography variant='body2' component='span'>
                    {product.title}{' '}
                  </Typography>
                  <Box>
                    <Typography variant='body2' component='span'>
                      {product.discountedPrice}
                    </Typography>
                    <Typography variant='body2' component='span'>
                      x {product.quantity}
                    </Typography>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Typography variant='body1'>Cart is empty</Typography>
          )}
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between ', marginTop: 1 }}>
            <Typography>Total:</Typography>
            <Typography sx={{ textAlign: 'right' }}>{state.total.toFixed(2)},-</Typography>
          </Box>

          {state.cart.length > 0 && (
            <StyledLink to='/purchase'>
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
