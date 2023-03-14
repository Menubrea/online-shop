import { Box, Typography } from '@mui/material';

export function StoreInformation() {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ color: 'secondary.dark', fontWeight: 700 }} variant='body1'>
          Shipping
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum
          rhoncus est pellentesque elit ullamcorper.
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ color: 'secondary.dark', fontWeight: 700 }} variant='body1'>
          Purchase now, pay later
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper.
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ color: 'secondary.dark', fontWeight: 700 }} variant='body1'>
          Return Policy
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum.
        </Typography>
      </Box>
    </>
  );
}
