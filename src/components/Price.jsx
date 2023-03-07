import { Box, Typography } from '@mui/material';

export default function Price({ product }) {
  let sum;
  sum = product.price - product.discountedPrice;
  let stringedSum = sum.toString();

  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        backgroundColor: 'primary.dark',
        color: 'white.light',
        paddingX: 1,
        bottom: 0,
        right: 0,
        textAlign: 'center',
        minHeight: 65,
        minWidth: 130,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Display this if discounted and price does not match */}
      {product.discountedPrice !== product.price ? (
        <Box>
          <Typography variant='body2' component='s'>
            {product.price} kr
          </Typography>{' '}
          <Typography
            sx={{ fontWeight: 700 }}
            variant='body2'
            component='strong'
          >
            {product.discountedPrice} kr
          </Typography>{' '}
          <Typography
            sx={{ padding: 0, margin: 0 }}
            variant='body1'
            component='div'
          >
            [You save {stringedSum.split('.')[0]} kr]
          </Typography>
        </Box>
      ) : (
        <Typography variant='body1' component='div'>
          {/* Else This */}
          {product.price} kr
        </Typography>
      )}
    </Box>
  );
}
