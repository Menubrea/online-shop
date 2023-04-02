import { Box, Container, Typography, styled, Divider, Button, Alert } from '@mui/material';
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
  display: block;
  width: fit-content;
  margin: 0 auto;
`;

/**
 * Main Component for Product specific page
 * @param {*}
 * @returns renders the content of ProductPage to the browser.
 */
export default function ProductPage({ data, state, dispatch }) {
  const [filterProduct, setFilterProduct] = useState({ tags: [] });
  const [filteredProducts, setFilteredProducts] = useState([]);

  let { id } = useParams();

  // Filters through the product array and stores and sets value of filterProduct where product.id and id from useParams matches.
  useEffect(() => {
    data.filter((product) => {
      if (id === product.id) {
        localStorage.setItem('id', product.id);
        return setFilterProduct(product);
      }
      return false;
    });
  }, [id, data]);

  // If an instance of no id being provided, sets filterProduct to that of stored ID.
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

  // Filters through the array, and sets a new array of filteredProducts if there are matching tags in the specific product and the remaining products of the array.
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

  return (
    <Box
      sx={{
        marginY: 2,
      }}
      component='main'>
      {/* MetaData */}
      <MetaData title={`Re:mote | ${filterProduct.title}`} description={`Re:mote | ${filterProduct.description}`} tags={filterProduct.tags.map((tag) => tag)} />
      {/* Breadcrumbs Navigation*/}
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
        {/* Product Details*/}
        <Box sx={{ gridColumn: { md: '1 / 3', xs: '1 / 4' }, height: 'max-content', position: 'relative', overflow: 'hidden' }}>
          <ProductDetails data={filterProduct} />
          {filterProduct.discountedPrice !== filterProduct.price && <Sale product={filterProduct} />}
        </Box>
        {/* Product Price, AddTo Cart and StoreInformation */}
        <Box
          sx={{
            gridColumn: { md: '3 / 4', xs: '1 / 4' },
            padding: 2,
            border: 0.5,
            borderStyle: 'solid',
            borderRadius: 2,
            borderColor: 'rgba(0, 0, 0, .4)',
          }}>
          <AddToCart data={filterProduct} dispatch={dispatch} state={state} />
          <Reviews data={filterProduct} />
          <StoreInformation />
        </Box>
      </Container>
      <Divider sx={{ marginY: 2 }} />

      {/* Array of filtered items. */}
      <Box>
        <Container>
          <Typography variant='h6' component='h2'>
            You might also like:
          </Typography>
        </Container>
        {filteredProducts.length > 0 ? (
          <Products data={filteredProducts} state={state} headerElement='h3' />
        ) : (
          <Container>
            <Alert severity='info'>No Match found</Alert>
          </Container>
        )}
        <StyledLink to='/' sx={{ marginTop: 2 }}>
          <Button variant='contained' color='white'>
            Return Home
          </Button>
        </StyledLink>
      </Box>
    </Box>
  );
}
