import { Box, Divider, Typography, Container, Button } from '@mui/material';

/**
 * Component for handling Error State
 */
export function Error() {
  return (
    <Container sx={{ minHeight: '98vh', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ borderRadius: 2, border: 0.5, overflow: 'hidden' }}>
        <Typography variant='h6' component='h1' sx={{ fontFamily: 'Arbotek', fontWeight: 900, textAlign: 'center', marginY: 1 }}>
          Re:mote
        </Typography>
        <Divider />
        <Box sx={{ padding: 2 }}>
          <Typography>Uh, oh! An error occurred. If the problem persists, please contact customer support</Typography>
          <Button onClick={() => window.location.reload()} sx={{ marginTop: 2 }} variant='outlined' fullWidth>
            Reload
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
