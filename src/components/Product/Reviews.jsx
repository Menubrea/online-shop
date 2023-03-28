import { Paper, CardHeader, Box, Rating, Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Reviews({ data }) {
  return (
    <>
      {data.reviews &&
        data.reviews.map((review, index) => {
          return (
            <Paper elevation={1} key={index} sx={{ marginTop: 2, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black.light' }}>
                <CardHeader
                  sx={{ paddingY: 0.4 }}
                  title={review.username}
                  titleTypographyProps={{
                    color: 'white.light',
                    fontSize: 18,
                  }}
                />
                {review.rating > 0 ? (
                  <Rating
                    sx={{ color: 'primary.main', marginRight: 3 }}
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
              <Box sx={{ padding: 1, paddingX: 2 }}>
                <Typography variant='body2'>{review.description}</Typography>
              </Box>
            </Paper>
          );
        })}
    </>
  );
}
