import { Typography, Box } from '@mui/material';

export function Tags({ product }) {
  return (
    <Typography>
      {product.tags &&
        product.tags.map((tag) => (
          <Box
            key={tag}
            component='span'
            sx={{
              display: 'inline-flex',
              marginRight: 0.4,
              borderRadius: 10,
              backgroundColor: 'white.light',
              paddingX: 1,
              fontSize: 14,
              height: 'fit-content',
              alignItems: 'center',
            }}>
            {tag}
          </Box>
        ))}
    </Typography>
  );
}
