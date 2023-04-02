import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)`
  text-align: center;
`;

/**
 * Component for products on Sale.
 * @param {object} product
 * @returns renders content with sale value in percentage
 */
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

/**
 * Component for handling Price of product
 * @param {object} product
 * @returns renders price depending on discountedPrice or price is matching or not.
 */
export default function Price({ product }) {
  return (
    <StyledBox>
      {/* Display this if discounted and price does not match */}
      {product.discountedPrice !== product.price ? (
        <>
          {/* Product disCountedPrice */}
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
          {/* Product Price */}
          <Typography variant='body2' component='div'>
            {product.price},-
          </Typography>
        </Box>
      )}
    </StyledBox>
  );
}
