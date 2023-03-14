import Image from 'mui-image';
import hero from '../../assets/hero.png';
import { useState, useEffect } from 'react';
import { Button, Box, styled } from '@mui/material';

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
  const [isShown, setIsShown] = useState(true);

  function DisplayHero(boolean) {
    sessionStorage.setItem('isShown', String(boolean));
    return setIsShown(boolean);
  }

  useEffect(() => {
    const isSaved = sessionStorage.getItem('isShown');
    isSaved && setIsShown(JSON.parse(isSaved));
  }, [isShown]);

  return (
    <>
      <Box>
        {isShown && (
          <StyledBox>
            <Image src={hero} height='fit-content' maxHeight={500} fit='contain' title='page-hero' duration={1000} />
          </StyledBox>
        )}
        {isShown && (
          <Button variant='contained' fullWidth onClick={() => DisplayHero(false)}>
            Hide hero
          </Button>
        )}
      </Box>
    </>
  );
}
