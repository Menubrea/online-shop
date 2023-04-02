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

export default function Hero() {
  // === || READ || Commented out code allows for functionality to toggle hero. To try it out again, you need to check for state {isShown &&} before hero render, and uncomment other code === //

  // const [isShown, setIsShown] = useState(true);

  // function DisplayHero(boolean) {
  //   sessionStorage.setItem('isShown', String(boolean));
  //   return setIsShown(boolean);
  // }

  // useEffect(() => {
  //   const isSaved = sessionStorage.getItem('isShown');
  //   isSaved && setIsShown(JSON.parse(isSaved));
  // }, [isShown]);

  return (
    <Container sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
      <StyledBox sx={{ marginTop: 2 }}>
        <Image src={hero} height='fit-content' maxHeight={500} fit='contain' title='page-hero' duration={100} sx={{ borderRadius: 5 }} />
      </StyledBox>
      {/* {isShown ? (
          <Button sx={{ position: 'absolute', top: 0, borderRadius: 0 }} variant='outlined' fullWidth onClick={() => DisplayHero(false)}>
            Hide illustration
          </Button>
        ) : (
          <Button sx={{ borderRadius: 0 }} color='black' variant='outlined' fullWidth onClick={() => DisplayHero(true)}>
            Show Illustration
          </Button>
        )} */}
    </Container>
  );
}
