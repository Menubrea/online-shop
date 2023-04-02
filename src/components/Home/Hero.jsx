import hero from '../../assets/hero.png';
// import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';

/**
 * Component for rendering Hero
 * @returns hero
 */
export default function Hero() {
  return (
    <Container sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ marginTop: 2 }}>
        <Box component='img' src={hero} alt={'hero'} height='fit-content' maxHeight={500} fit='contain' title='page-hero' sx={{ borderRadius: 5 }} />
      </Box>
    </Container>
  );
}
