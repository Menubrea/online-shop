import { Box, CardHeader, Container, Paper } from '@mui/material';
import Image from 'mui-image';
import Price, { Sale } from '../ProductComponents/Price';
import Carousel from 'react-material-ui-carousel';

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
      <Paper sx={{ overflow: 'hidden', height: 'fit-content', position: 'relative' }}>
        <Box>
          <Image src={item.imageUrl} height={300} fit='cover' />
          <CardHeader title={item.title} />
          <Price product={item} />
        </Box>
        <Sale product={item} />
      </Paper>
    );
  }

  return (
    <Container>
      <Carousel sx={{ marginTop: 2 }} navButtonsAlwaysVisible>
        {filteredItems.map((item, i) => (
          <OnSaleItem key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}