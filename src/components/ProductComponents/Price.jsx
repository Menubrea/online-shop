import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)`
  text-align: center;
`;

export function Sale({ product }) {
  let difference;
  difference = product.price - product.discountedPrice;
  let percentageDifference = (difference / product.price) * 100;
  let stringedPercentageDifference = percentageDifference.toString();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: -65,
        left: -70,
        padding: '5em 5em 0.2em',
        backgroundColor: '#b0d995',
        color: '#1a1a1a',
        transform: 'rotate(-20deg)',
      }}>
      <Typography variant='body2' component='p'>
        {stringedPercentageDifference.split('.')[0]}% off!
      </Typography>{' '}
    </Box>
  );
}

export default function Price({ product }) {
  return (
    <StyledBox>
      {/* Display this if discounted and price does not match */}
      {product.discountedPrice !== product.price ? (
        <>
          <Box>
            <Typography variant='body2' component='s'>
              {product.price},-
            </Typography>{' '}
            <Typography sx={{ fontWeight: 700 }} variant='body2' component='strong'>
              {product.discountedPrice},-
            </Typography>{' '}
          </Box>
        </>
      ) : (
        <Box>
          <Typography variant='body1' component='div'>
            {/* Else This */}
            {product.price},-
          </Typography>
        </Box>
      )}
    </StyledBox>
  );
}
