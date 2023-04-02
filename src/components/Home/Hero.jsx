import Image from 'mui-image';
import hero from '../../assets/hero.png';
// import { useState, useEffect } from 'react';
import { Box, styled, Container } from '@mui/material';

const StyledBox = styled(Box)`
  animation: Fade 1s ease-in;

  @keyframes Fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

/**
 * Component for rendering Hero
 * @returns hero
 */
export default function Hero() {
  return (
    <Container sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
      <StyledBox sx={{ marginTop: 2 }}>
        <Image src={hero} height='fit-content' maxHeight={500} fit='contain' title='page-hero' duration={100} sx={{ borderRadius: 5 }} />
      </StyledBox>
    </Container>
  );
}
