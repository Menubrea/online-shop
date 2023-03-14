import { Card, CardHeader, Box, Rating, Typography, CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function Reviews({ data }) {
  console.log(data);

  return (
    <>
      {data.reviews &&
        data.reviews.map((review) => {
          return (
            <Card key={review.id} sx={{ marginTop: 2 }}>
              {console.log(review)}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <CardHeader
                  title={review.username}
                  titleTypographyProps={{
                    fontFamily: 'arbotek',
                    fontWeight: 900,
                    color: 'black.light',
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
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                  />
                ) : (
                  <Typography>No rating</Typography>
                )}
              </Box>
              <CardContent sx={{ marginY: 0, paddingY: 0 }}>
                <Typography>{review.description}</Typography>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
}
