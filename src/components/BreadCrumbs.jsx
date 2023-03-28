import { Container, styled, Typography } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2em;
  gap: 0.2em;
  :hover {
    text-decoration: underline;
  }
`;

export function BreadCrumbs({ product }) {
  const path = useLocation();

  return (
    <Container
      sx={{ display: 'flex', marginY: 1, alignItems: 'center', width: 'fit-content', border: 0.5, borderColor: 'black.light', padding: 1, borderRadius: 2 }}>
      <StyledLink sx={{ color: 'secondary.dark' }} to='/'>
        <HomeIcon fontSize='small' color='secondary' />
        <Typography variant='body2'>Home</Typography>
      </StyledLink>
      <KeyboardDoubleArrowRightIcon fontSize='small' sx={{ marginX: 1 }} color='secondary' />
      {path.pathname.startsWith('/product') && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to={`/product/${product.id}`}>
          <Typography variant='body2'>{product.title}</Typography>
        </StyledLink>
      )}
      {path.pathname === '/contact' && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to='/contact'>
          <Typography variant='body2'>Contact</Typography>
        </StyledLink>
      )}
      {path.pathname === '/checkout' && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to='/cart'>
          <Typography variant='body2'>Cart</Typography>
        </StyledLink>
      )}
    </Container>
  );
}
