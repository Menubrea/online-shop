import { Box, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)`
  text-align: center;
`;

export function Sale({ product }) {
  let difference;
  difference = product.price - product.discountedPrice;
  let stringedDifference = difference.toString();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        left: 8,
        padding: '0.2em .5em',
        backgroundColor: '#595959b1',
        color: '#fff',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography sx={{ fontWeight: 700 }} variant='body1' component='p'>
        On Sale
      </Typography>{' '}
      <Typography variant='body2' component='p'>
        You save {stringedDifference.split('.')[0]},-
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
