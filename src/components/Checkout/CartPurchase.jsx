import { Typography, Box } from '@mui/material';

export function CartPurchase({ state }) {
  return state.cart.map((product) => {
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
            {' '}
            x {product.quantity}
          </Typography>
        </Box>
      </Box>
    );
  });
}
