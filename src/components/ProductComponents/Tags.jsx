import { Typography, Box } from '@mui/material';

/**
 * Tags component for product
 * @param {object} product
 * @returns rendered stylized tags based on the product object.
 */
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
              borderRadius: 1,
              backgroundColor: 'white.main',
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
