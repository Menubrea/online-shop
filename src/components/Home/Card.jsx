import { Card, Typography, CardContent, CardHeader, Box, Divider, CardActions, Button, styled } from '@mui/material';
import Image from 'mui-image';
import Price from '../Price';
import { Link } from 'react-router-dom';
import { Sale } from '../Price';

const LinkWrapper = styled(Link)`
  all: unset;
  width: 100%;
`;

const StyledCard = styled(Card)`
  background: rgb(255, 240, 235);
  background: linear-gradient(10deg, rgba(255, 240, 235, 0.3) 0%, rgba(249, 249, 249, 0.3) 100%);
  cursor: pointer;
  border-radius: 0;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;

  #cardContent {
    height: 450px;
  }
  :hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }
`;

export default function ProductCard({ data, dispatch, headerElement }) {
  return (
    <>
      {data.map((product) => (
        <StyledCard key={product.id} component='li'>
          <Box sx={{ position: 'relative' }} id='cardContent'>
            <LinkWrapper to={`/product/${product.id}`}>
              <CardContent
                sx={{
                  padding: 1,
                  backgroundColor: 'white.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Typography>
                  {product.tags &&
                    product.tags.map((tag) => (
                      <Box
                        component='span'
                        sx={{
                          display: 'inline-flex',
                          marginRight: 0.4,
                          backgroundColor: 'white.light',
                          paddingX: 0.4,
                        }}>
                        {tag}
                      </Box>
                    ))}
                </Typography>
                <Price product={product} />
              </CardContent>
              <Box sx={{ position: 'relative' }}>
                <Image src={product.imageUrl} height={180} duration={1000} />
                {product.discountedPrice !== product.price && <Sale product={product} />}
              </Box>

              <Box display={'flex'}>
                <CardHeader
                  title={product.title}
                  sx={{ margin: 0, paddingY: 1 }}
                  component={headerElement}
                  titleTypographyProps={{
                    fontFamily: 'arbotek',
                    fontWeight: 900,
                    color: 'black.light',
                  }}
                />
              </Box>
              <Divider />
              <CardContent>
                <Typography variant='body2'>{product.description}</Typography>
              </CardContent>
            </LinkWrapper>
            <CardActions fullWidth sx={{ position: 'absolute', bottom: 0, width: '100%', display: 'flex', gap: 1 }}>
              <Button
                fullWidth
                sx={{ backgroundColor: 'black.light', color: 'white.main' }}
                variant='contained'
                onClick={() => dispatch({ type: 'addProduct', payload: product })}>
                Add to Cart
              </Button>

              <LinkWrapper to={`/product/${product.id}`}>
                <Button fullWidth variant='contained' color='primary'>
                  To Product
                </Button>
              </LinkWrapper>
            </CardActions>
          </Box>
        </StyledCard>
      ))}
    </>
  );
}
