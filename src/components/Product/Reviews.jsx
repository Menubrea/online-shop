import { Paper, CardHeader, Box, Rating, Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-material-ui-carousel';

/**
 * Component for rendering reviews
 * @param {object} data Product object
 * @returns Returns the content of the review array in the product object
 */
export function Reviews({ data }) {
  return (
    <Carousel autoPlay={false}>
      {data.reviews &&
        data.reviews.map((review, index) => {
          return (
            <Paper elevation={1} key={index} sx={{ marginTop: 2, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black.light' }}>
                {/* Review Title */}
                <CardHeader
                  sx={{ paddingY: 0.4 }}
                  title={review.username}
                  titleTypographyProps={{
                    color: 'white.light',
                    fontSize: 18,
                  }}
                />
                {/* Review Rating */}
                {review.rating > 0 ? (
                  <Rating
                    sx={{ color: 'primary.main', marginRight: 2 }}
                    size='small'
                    name='rating'
                    value={review.rating}
                    defaultValue={0}
                    precision={0.5}
                    readOnly
                    icon={<FavoriteIcon fontSize='inherit' />}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit' color='white' />}
                  />
                ) : (
                  <Typography>No rating</Typography>
                )}
              </Box>
              <Divider />
              {/* Review Description */}
              <Box sx={{ padding: 1, paddingX: 2 }}>
                <Typography variant='body2'>{review.description}</Typography>
              </Box>
            </Paper>
          );
        })}
    </Carousel>
  );
}
