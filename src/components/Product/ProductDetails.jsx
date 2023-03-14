import Image from 'mui-image';
import { Box, Rating, Typography, CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function ProductDetails({ data }) {
  return (
    <>
      <Image src={data.imageUrl} title={data.title} sx={{ maxHeight: 500 }} />
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 2 }}>
          <Typography variant='h4' component='h1' sx={{ fontFamily: 'arbotek', fontWeight: 900, color: 'black.light' }}>
            {data.title}
          </Typography>
          {data.rating > 0 ? (
            <Rating
              sx={{ color: 'primary.main', marginRight: 3 }}
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
        <CardContent sx={{ marginY: 0, paddingY: 0 }}>
          <Typography>{data.description}</Typography>
        </CardContent>
      </Box>
    </>
  );
}
