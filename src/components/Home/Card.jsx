import { Card, Typography, CardContent, CardHeader, Box, Divider, styled } from '@mui/material';
import Image from 'mui-image';
import Price from '../ProductComponents/Price';
import { Link } from 'react-router-dom';
import { Sale } from '../ProductComponents/Price';
import { Tags } from '../ProductComponents/Tags';

const LinkWrapper = styled(Link)`
  all: unset;
  display: block;
`;

const StyledCard = styled(Card)`
  position: relative;
  background: rgb(255, 240, 235);
  background: linear-gradient(10deg, rgba(255, 240, 235, 0.4) 0%, rgba(249, 249, 249, 0.4) 100%);
  cursor: pointer;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0em;
  height: 390px;

  :hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default function ProductCard({ data, dispatch, headerElement }) {
  return (
    <>
      {data.map((product) => (
        <StyledCard tabIndex={0} key={product.id} component='li'>
          <LinkWrapper to={`/product/${product.id}`}>
            <CardContent
              sx={{
                padding: 0.5,
                backgroundColor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Tags product={product} />
              <Price product={product} />
            </CardContent>

            {/* Product Image and sale */}
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Image src={product.imageUrl} height={180} duration={1000} />
              {product.discountedPrice !== product.price && <Sale product={product} />}
            </Box>

            {/* Card Header */}
            <CardHeader
              title={product.title}
              sx={{ margin: 0, paddingY: 1 }}
              component={headerElement}
              titleTypographyProps={{
                fontFamily: 'arbotek',
                fontWeight: 900,
                color: 'black.light',
                fontSize: 18,
              }}
            />

            <Divider />

            {/* Product description */}
            <CardContent>
              <Typography variant='body2'>{product.description}</Typography>
            </CardContent>
          </LinkWrapper>

          {/* Link to Product */}
          <LinkWrapper
            tabIndex={0}
            sx={{
              backgroundColor: 'black.light',
              color: 'white.light',
              width: '100%',
              bottom: 0,
              paddingBottom: 0.5,
              textAlign: 'center',
              position: 'absolute',
              transform: 'rotate(0deg)',
              fontFamily: 'arbotek',
              fontWeight: 900,
              fontSize: 20,
              borderBottom: '5px solid #ffccbc',

              '&:hover': {
                boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, .2)',
              },
            }}
            to={`/product/${product.id}`}>
            Read More
          </LinkWrapper>
        </StyledCard>
      ))}
    </>
  );
}
