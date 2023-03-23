import { Paper, CardHeader, Box, Rating, Typography, CardContent, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Reviews({ data }) {
  console.log(data);

  return (
    <>
      {data.reviews &&
        data.reviews.map((review, index) => {
          return (
            <Paper key={index} sx={{ marginTop: 2, overflow: 'hidden' }}>
              {console.log(review)}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'black.light' }}>
                <CardHeader
                  sx={{ paddingY: 0.5 }}
                  title={review.username}
                  titleTypographyProps={{
                    color: 'white.light',
                    fontSize: 22,
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
              <CardContent sx={{ marginY: 0, paddingY: 0, marginTop: 2 }}>
                <Typography>{review.description}</Typography>
              </CardContent>
            </Paper>
          );
        })}
    </>
  );
}
