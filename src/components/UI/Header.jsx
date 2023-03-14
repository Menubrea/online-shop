import { Nav } from './Nav';
import { AppBar, Toolbar, Typography, Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide
      appear={false}
      direction='down'
      in={!trigger}>
      {children}
    </Slide>
  );
}

export function Header(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          component='header'
          sx={{ backgroundColor: 'white.main', position: 'sticky' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                fontFamily: 'arbotek',
                fontWeight: 900,
                color: 'white.main',
                fontSize: 30,
                lineHeight: 1,
                backgroundColor: 'black.light',
                paddingX: 1,
                paddingBottom: 1,
              }}>
              Re:mote
            </Typography>
            <Nav />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
