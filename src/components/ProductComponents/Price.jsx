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
        top: -60,
        left: -110,
        padding: '5em 5em 0.2em',
        backgroundColor: '#bdd7accd',
        backdropFilter: 'blur(30px)',
        color: '#1a1a1a',
        transform: 'rotate(-45deg)',
      }}>
      <Typography variant='body1' component='p'>
        - {stringedPercentageDifference.split('.')[0]}%
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
          <Typography variant='body2' component='div'>
            {/* Else This */}
            {product.price},-
          </Typography>
        </Box>
      )}
    </StyledBox>
  );
}
