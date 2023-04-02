import { Nav } from './Nav';
import { AppBar, Toolbar, Typography, Slide, styled, Box } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: block;
`;

/**
 * Function for hiding component while scrolling.
 * @param {*} props children, window
 * @returns MUI slide component with the content of its children. A wrapper that hides the children within from the window while scrolling down.
 */
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}
/**
 * Header component for UI
 * @param {*} props
 * @returns renders header to the application
 */
export function Header(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar component='header' sx={{ backgroundColor: 'white.main', position: 'sticky' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Logo />
            <Nav />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export function Logo() {
  return (
    <StyledLink to='/' sx={{ backgroundColor: 'black.light', padding: '0.3em .5em', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Box
          component='img'
          sx={{
            height: 25,
            width: 25,
          }}
          alt='logo'
          src={logo}
        />
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{
            fontFamily: 'arbotek',
            fontWeight: 900,
            color: 'white.main',
            fontSize: 25,
            lineHeight: 1,
            backgroundColor: 'black.light',
            paddingBottom: 0.7,
          }}>
          Re:mote
        </Typography>
      </Box>
    </StyledLink>
  );
}
