import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)`
  backdrop-filter: blur(10px);
  background-color: #ffffff87;
  padding: 0 0.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function Price({ product, position }) {
  // Calculate and stringify the difference to allow the use of string methods.
  let difference;
  difference = product.price - product.discountedPrice;
  let stringedDifference = difference.toString();

  return (
    <StyledBox
      sx={{
        position: { position },
        bottom: 0,
      }}>
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
          <Typography sx={{ fontWeight: 700 }} variant='body1' component='p'>
            You save {stringedDifference.split('.')[0]},-
          </Typography>{' '}
        </>
      ) : (
        <Box>
          <Typography variant='body1' component='div'>
            {/* Else This */}
            {product.price} kr
          </Typography>
        </Box>
      )}
    </StyledBox>
  );
}
