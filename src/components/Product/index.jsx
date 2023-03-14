import { Box, Container, Typography } from '@mui/material';
import { Reviews } from './Reviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Products } from '../Home/Products';
import { StoreInformation } from '../StoreInformation';
import { AddToCart } from './AddToCart';
import { ProductDetails } from './ProductDetails';

export default function ProductPage({ data, state, dispatch }) {
  const [filterProduct, setFilterProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    data.filter((product) => {
      if (id === product.id) {
        localStorage.setItem('id', product.id);
        return setFilterProduct(product);
      }
      return false;
    });
  }, [filterProduct, id, data]);

  if (filterProduct) {
    return (
      <Box
        sx={{
          marginY: 2,
        }}>
        <Container
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              sm: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}>
          <Box sx={{ gridColumn: '1 / 3', height: 'max-content' }}>
            <ProductDetails data={filterProduct} />
          </Box>
          <Box sx={{ padding: 2, border: 2, borderStyle: 'solid', borderColor: 'black.main' }}>
            <AddToCart data={filterProduct} dispatch={dispatch} state={state} />
            <Reviews data={filterProduct} />
            <StoreInformation />
          </Box>
        </Container>
        <Box sx={{ marginTop: 4 }}>
          <Container>
            <Typography variant='h6' component='h2'>
              You might also like:
            </Typography>
          </Container>
          <Products data={data} state={state} dispatch={dispatch} headerElement='h3' />
        </Box>
      </Box>
    );
  }
}
