import { Card, Typography, CardMedia, CardContent, CardHeader, Box, Divider, Rating, CardActions, Button, styled } from '@mui/material';
import Image from 'mui-image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Price from '../Price';
import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
  all: unset;
  display: block;
`;

const StyledCard = styled(Card)`
  --size: 268px;
  --time: 400ms;
  height: var(--size);
  cursor: pointer;
  border-radius: 0;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all var(--time) ease-in-out;

  #cardContent {
    transition: all var(--time) ease-in-out;
    transition-delay: calc(var(--time) / 2);

    height: calc(var(--size) + 220px);
    position: relative;
    :before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: #f1f1f1;
      transform: translateY(calc(var(--size) * 2));
      transition: all var(--time) ease-in-out;
      z-index: -100;
    }
  }
  :hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
    #cardContent {
      transform: translateY(-220px);
      :before {
        transform: translateY(var(--size));
        transition-delay: calc(var(--time) / 2);
      }
    }
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
                {product.rating !== 0 ? (
                  <Rating
                    sx={{ color: 'primary.main' }}
                    name='read-only'
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    icon={<FavoriteIcon fontSize='inherit' />}
                    emptyIcon={<FavoriteBorderIcon sx={{ color: 'primary.main' }} fontSize='inherit' />}
                  />
                ) : (
                  <Box
                    sx={{
                      backgroundColor: 'white.main',
                      color: 'white',
                      padding: 0,
                    }}>
                    No rating
                  </Box>
                )}
              </CardContent>
              <Box sx={{ position: 'relative' }}>
                <Image src={product.imageUrl} height={180} duration={1000} />
                <Price product={product} position='absolute' />
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
            <CardActions fullWidth sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <Button
                fullWidth
                sx={{ backgroundColor: 'black.light', color: 'white.main' }}
                variant='contained'
                onClick={() => dispatch({ type: 'addProduct', payload: product })}>
                Add to Cart
              </Button>
              <Button fullWidth variant='contained' sx={{ backgroundColor: 'primary.dark', color: 'white.main' }}>
                <LinkWrapper to={`/product/${product.id}`}>Go to Product</LinkWrapper>
              </Button>
            </CardActions>
          </Box>
        </StyledCard>
      ))}
    </>
  );
}
