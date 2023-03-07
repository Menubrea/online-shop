import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardHeader,
  Box,
  Divider,
  Rating,
  CardActions,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Price from '../Price';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const ResetLink = styled(Link)`
  all: unset;
  display: block;
`;

const StyledCard = styled(Card)`
  --size: 268px;
  height: var(--size);
  cursor: pointer;
  border-radius: 0;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 600ms ease-in-out;

  #cardContent {
    transition: all 600ms ease-in-out;
    transition-delay: 300ms;

    height: calc(var(--size) + 220px);
    position: relative;
    :before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: #f1f1f1;
      transform: translateY(calc(var(--size) * 2));

      transition: all 600ms ease-in-out;

      z-index: -1;
    }
  }
  :hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
    #cardContent {
      transform: translateY(-220px);
      :before {
        transform: translateY(var(--size));
        transition-delay: 300ms;
      }
    }
  }
`;

export default function ProductCard({ data, state, dispatch }) {
  return (
    <>
      {data.map((product) => (
        <StyledCard key={product.id} component='li'>
          <Box sx={{ position: 'relative' }} id='cardContent'>
            <ResetLink to={`/product/${product.id}`}>
              <CardContent
                sx={{
                  padding: 1,
                  backgroundColor: 'white.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography>
                  {product.tags &&
                    product.tags.map((tag) => (
                      <Box
                        component='span'
                        sx={{
                          display: 'inline-flex',
                          marginRight: 0.4,
                          backgroundColor: 'white.light',
                          paddingX: 0.2,
                          borderRadius: 1,
                        }}
                      >
                        [{tag}]
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
                    emptyIcon={
                      <FavoriteBorderIcon
                        sx={{ color: 'primary.main' }}
                        fontSize='inherit'
                      />
                    }
                  />
                ) : (
                  <Box
                    sx={{
                      backgroundColor: 'white.main',
                      color: 'white',
                      padding: 0,
                    }}
                  >
                    No rating
                  </Box>
                )}
              </CardContent>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  sx={{
                    height: 180,
                    objectFit: 'cover',
                  }}
                  image={product.imageUrl}
                  title={product.title}
                />
                <Price product={product} />
              </Box>

              <CardHeader
                title={product.title}
                sx={{ margin: 0, paddingY: 1 }}
                titleTypographyProps={{
                  fontFamily: 'arbotek',
                  fontWeight: 900,
                  color: 'black.light',
                }}
              />
              <Divider />
              <CardContent>
                <Typography variant='body2'>{product.description}</Typography>
              </CardContent>
            </ResetLink>
            <CardActions
              fullWidth
              sx={{ position: 'absolute', bottom: 0, width: '100%' }}
            >
              <Button
                fullWidth
                sx={{ backgroundColor: 'black.light', color: 'white.main' }}
                variant='contained'
                onClick={() =>
                  dispatch({ type: 'addProduct', payload: product })
                }
              >
                Add to Cart
              </Button>
              <Button
                fullWidth
                variant='contained'
                sx={{ backgroundColor: 'primary.dark', color: 'white.main' }}
              >
                <ResetLink to={`/product/${product.id}`}>
                  Go to Product
                </ResetLink>
              </Button>
            </CardActions>
          </Box>
        </StyledCard>
      ))}
    </>
  );
}
