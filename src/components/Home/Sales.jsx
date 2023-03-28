import { Box, CardHeader, Typography, styled } from '@mui/material';
import Price, { Sale } from '../ProductComponents/Price';
import Carousel from 'react-material-ui-carousel';
import { Divider } from '@mui/material';
import { Tags } from '../ProductComponents/Tags';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
  all: unset;
  display: block;
`;

export function Sales({ data }) {
  let onSale;
  const filteredItems = data.filter((product) => {
    onSale = product.discountedPrice !== product.price;
    if (onSale) {
      return true;
    }
    return false;
  });

  function OnSaleItem({ item }) {
    return (
      <Box sx={{ overflow: 'hidden', position: 'relative', margin: '0 auto', border: '.5px solid darkgrey', borderRadius: 2 }}>
        <Box sx={{ display: 'grid', height: 'fit-content', gridTemplateColumns: { md: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)' } }}>
          <Box
            component='img'
            sx={{ gridColumn: { md: '1 / 3', sm: '1 / 1' }, height: 300, width: '100%', objectFit: 'cover' }}
            src={item.imageUrl}
            height={300}
            alt={item.title}
            fit='cover'
          />
          <Box
            sx={{
              position: 'relative',
              gridColumn: { md: '3 / 5', sm: '1 / 1' },
              padding: { md: 2, xs: 1 },
              borderLeft: { md: '1px solid darkgrey', sm: 'none' },
              height: '300px',
            }}>
            <Box
              sx={{
                padding: 0.5,
                paddingX: 1,
                backgroundColor: 'secondary.light',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Tags product={item} />
              <Price product={item} />
            </Box>
            <CardHeader title={item.title} titleTypographyProps={{ fontFamily: 'arbotek', fontWeight: 900, color: 'secondary.dark' }} />
            <Divider sx={{ marginBottom: 2 }} />
            <Box sx={{ padding: '0 1em' }}>
              <Typography>{item.description}</Typography>
            </Box>
            <LinkWrapper
              tabIndex={0}
              sx={{
                backgroundColor: 'black.light',
                color: 'white.light',
                width: '90%',
                bottom: 10,
                left: '5%',
                paddingBottom: 0.5,
                textAlign: 'center',
                position: 'absolute',
                fontFamily: 'arbotek',
                fontWeight: 900,
                fontSize: 20,
                cursor: 'pointer',
                borderBottom: 5,
                borderBottomColor: 'secondary.light',

                '&:hover': {
                  boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, .2)',
                },
              }}
              to={`/product/${item.id}`}>
              Read More
            </LinkWrapper>
          </Box>
        </Box>
        <Sale product={item} />
      </Box>
    );
  }

  return (
    <Box>
      <Carousel sx={{ marginTop: 2 }}>
        {filteredItems.map((item, i) => (
          <OnSaleItem key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}
