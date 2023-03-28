import { Box, Container, Typography, styled, Divider } from '@mui/material';
import { Reviews } from './Reviews';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Products } from '../Home/Products';
import { StoreInformation } from '../StoreInformation';
import { AddToCart } from './AddToCart';
import { ProductDetails } from './ProductDetails';
import { Sale } from '../ProductComponents/Price';
import { MetaData } from '../MetaData';
import { BreadCrumbs } from '../BreadCrumbs';

const StyledLink = styled(Link)`
  all: unset;
  padding: 0.5em 1em;
  margin: 0 auto;
  width: fit-content;
  background-color: #f7d6c9;
  border: 1px solid darkgrey;
  cursor: pointer;
`;

export default function ProductPage({ data, state, dispatch }) {
  const [filterProduct, setFilterProduct] = useState({ tags: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    data.filter((product) => {
      if (id === product.id) {
        localStorage.setItem('id', product.id);
        return setFilterProduct(product);
      }
      return false;
    });
  }, [id, data]);

  useEffect(() => {
    if (!id) {
      let storedId = localStorage.getItem('id');
      data.filter((product) => {
        if (storedId === product.id) {
          return setFilterProduct(product);
        }
        return false;
      });
    }
  }, [id, data]);

  useEffect(() => {
    let array = [];
    data.filter((product) => {
      if (product.id !== filterProduct.id && product.tags.some((item) => filterProduct.tags.includes(item))) {
        array.push(product);
        return setFilteredProducts(array);
      }
      return false;
    });
  }, [id, data, filterProduct]);

  if (data) {
    return (
      <Box
        sx={{
          marginY: 2,
        }}
        component='main'>
        <MetaData
          title={`Re:mote | ${filterProduct.title}`}
          description={`Re:mote | ${filterProduct.description}`}
          tags={filterProduct.tags.map((tag) => tag)}
        />
        <BreadCrumbs product={filterProduct} />
        <Container
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              sm: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}>
          <Box sx={{ gridColumn: { md: '1 / 3', xs: '1 / 4' }, height: 'max-content', position: 'relative', overflow: 'hidden' }}>
            <ProductDetails data={filterProduct} />
            {filterProduct.discountedPrice !== filterProduct.price && <Sale product={filterProduct} />}
          </Box>
          <Box
            sx={{
              gridColumn: { md: '3 / 4', xs: '1 / 4' },
              padding: 2,
              border: 0.5,
              borderStyle: 'solid',
              borderRadius: 2,
              borderColor: 'rgba(0, 0, 0, .2)',
            }}>
            <AddToCart data={filterProduct} dispatch={dispatch} state={state} />
            <Reviews data={filterProduct} />
            <StoreInformation />
          </Box>
        </Container>
        <Divider sx={{ marginY: 2 }} />
        <Box>
          <Container>
            <Typography variant='h6' component='h2'>
              You might also like:
            </Typography>
          </Container>
          {filteredProducts.length > 0 ? (
            <Products data={filteredProducts} state={state} headerElement='h3' />
          ) : (
            <Box sx={{ margin: '0 auto', width: 'fit-content', padding: '.2em .5em', borderRadius: 2, backgroundColor: 'black.light', color: 'white.light' }}>
              {' '}
              No matches found{' '}
            </Box>
          )}
          <StyledLink to='/'>Return Home</StyledLink>
        </Box>
      </Box>
    );
  }
}
