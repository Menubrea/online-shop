import { Box, Divider, Typography, Container } from '@mui/material';
import loading from '../assets/loading.gif';
import Image from 'mui-image';

/**
 * Component for handling Loading State
 */
export function Loading() {
  return (
    <Container sx={{ minHeight: '98vh', display: 'grid', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ borderRadius: 2, border: 0.5, overflow: 'hidden' }}>
        <Typography variant='h6' component='h1' sx={{ fontFamily: 'Arbotek', fontWeight: 900, textAlign: 'center', marginY: 1 }}>
          Re:mote
        </Typography>
        <Divider />
        <Image src={loading} height={200} width={200} />
      </Box>
    </Container>
  );
}
