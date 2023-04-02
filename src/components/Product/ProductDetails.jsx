import { Tags } from '../ProductComponents/Tags';
import { Box, Rating, Typography, CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

/**
 * Component for rendering product details
 * @param {object} data
 * @returns renders product details of a specific object in the products array from API.
 */
export function ProductDetails({ data }) {
  if (data) {
    return (
      <>
        {/* Product Image */}
        {data && (
          <Box
            component={'img'}
            src={data.imageUrl}
            title={data.title}
            sx={{ maxHeight: 500, display: 'block', borderRadius: 1, width: '100%', objectFit: 'cover' }}
          />
        )}
        <Box>
          <Box sx={{ margin: 2 }}>
            {/* Product Title */}
            <Typography variant='h4' component='h1' sx={{ fontFamily: 'arbotek', fontWeight: 900, color: 'black.light' }}>
              {data.title}
            </Typography>

            {/* Product Rating and Tags */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tags product={data} />
              {data.rating > 0 ? (
                <Rating
                  sx={{ color: 'primary.main' }}
                  name='rating'
                  value={data.rating}
                  precision={0.5}
                  readOnly
                  icon={<FavoriteIcon fontSize='inherit' />}
                  emptyIcon={<FavoriteBorderIcon sx={{ color: 'primary.main' }} fontSize='inherit' />}
                />
              ) : (
                <Typography>No Rating</Typography>
              )}
            </Box>
          </Box>

          {/* Product Description */}
          <CardContent sx={{ marginY: 0, paddingY: 0 }}>
            <Typography>{data.description}</Typography>
          </CardContent>
        </Box>
      </>
    );
  }
}
