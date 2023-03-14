import { Box, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box
      component='footer'
      sx={{ backgroundColor: 'primary.main' }}>
      <Typography
        variant='body2'
        sx={{ textAlign: 'center' }}>
        All Rights Reserved | Menubrea
      </Typography>
    </Box>
  );
}
