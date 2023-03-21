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
              backgroundColor: 'white.light',
              paddingX: 0.4,
              fontSize: 14,
            }}>
            {tag}
          </Box>
        ))}
    </Typography>
  );
}
