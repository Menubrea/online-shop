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

/**
 * Function for breadcrumbs navigation for application
 * @param {object} product
 * @returns rendered html based on path and product set.
 */
export function BreadCrumbs({ product }) {
  const path = useLocation();

  return (
    <Container
      component='nav'
      sx={{ display: 'flex', marginY: 1, alignItems: 'center', width: 'fit-content', border: 0.5, borderColor: 'black.light', padding: 1, borderRadius: 2 }}>
      <StyledLink sx={{ color: 'secondary.dark' }} to='/'>
        <HomeIcon fontSize='small' color='secondary' />
        <Typography variant='body2'>Home</Typography>
      </StyledLink>
      <KeyboardDoubleArrowRightIcon fontSize='small' sx={{ marginX: 1 }} color='secondary' />

      {/* Displayed if pathname starts with /product */}
      {path.pathname.startsWith('/product') && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to={`/product/${product.id}`}>
          <Typography variant='body2'>{product.title}</Typography>
        </StyledLink>
      )}

      {/* Displayed if pathname is /contact */}
      {path.pathname === '/contact' && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to='/contact'>
          <Typography variant='body2'>Contact</Typography>
        </StyledLink>
      )}

      {/* Displayed if pathname is /checkout */}
      {path.pathname === '/cart' && (
        <StyledLink sx={{ color: 'secondary.dark', backgroundColor: 'white.main', paddingX: 1, borderRadius: 2 }} to='/cart'>
          <Typography variant='body2'>Cart</Typography>
        </StyledLink>
      )}
    </Container>
  );
}
