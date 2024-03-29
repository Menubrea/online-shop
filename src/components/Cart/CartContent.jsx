import { Box, Typography, IconButton, styled } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Image from 'mui-image';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: #1b2b4e;

  :visited {
    color: #4b4839;
  }
`;

/**
 * Component for rendering Cart Content
 * @param {*}
 * @returns rendered content of state.cart
 */
export function CartContent({ state, dispatch }) {
  return state.cart.map((product) => {
    return (
      <Box
        component='article'
        key={product.id}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 0 1px 1px rgba(0, 0, 0, .1)',
          marginBottom: 1,
          borderRadius: 1,
        }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', paddingLeft: 2 }}>
          {/* Cart Item Image */}
          <Image src={product.imageUrl} title={product.title} height={60} width={60} sx={{ borderRadius: 100 }} duration={500} />

          {/* Cart Item Title and Description */}
          <Box>
            <StyledLink to={`/product/${product.id}`}>
              <Typography variant='body1' component='h2'>
                {product.title}
              </Typography>
            </StyledLink>
            <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} variant='body2'>
              {product.description}
            </Typography>
          </Box>
        </Box>

        {/* Adding or Removing quantity of items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton onClick={() => dispatch({ type: 'addProduct', payload: product })} variant='contained'>
            <AddCircleIcon />
          </IconButton>
          <Typography variant='body2'>{product.quantity}</Typography>
          <IconButton onClick={() => dispatch({ type: 'removeProduct', payload: product })} variant='contained'>
            <RemoveCircleIcon />
          </IconButton>
        </Box>
      </Box>
    );
  });
}
