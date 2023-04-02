import { Box, IconButton, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

/**
 * Footer component
 * @returns rendered html for Footer component
 */
export function Footer() {
  return (
    <Box component='footer' sx={{ backgroundColor: 'white.main', paddingY: 2 }}>
      <Typography variant='body2' sx={{ textAlign: 'center', marginBottom: 2 }}>
        All Rights Reserved | Menubrea
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          margin: '1em auto 0',
          width: 'fit-content',
          backgroundColor: 'rgba(255, 255,  255 ,.3)',
          paddingX: 1,
          borderRadius: 10,
        }}>
        <IconButton color='secondary'>
          <TwitterIcon />
        </IconButton>
        <IconButton color='secondary'>
          <RedditIcon />
        </IconButton>
        <IconButton color='secondary'>
          <InstagramIcon />
        </IconButton>
        <IconButton color='secondary'>
          <FacebookIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
