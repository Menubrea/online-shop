import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import hero from '../../assets/hero.png';
import { ContactForm } from './ContactForm';
import { Faq } from './Faq';

export function Contact() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, maxWidth: 1920 }} component='main'>
      <Box sx={{ backgroundColor: 'black.light' }}>
        <Image height={300} src={hero} title='hero' fit='contain' />
        <Faq />
      </Box>
      <Box sx={{ backgroundColor: 'black.light' }}>
        <Typography sx={{ backgroundColor: 'black.light', padding: '.5em 1em', color: 'white.main' }} variant='h4' component='h1'>
          Contact Us
        </Typography>
        <ContactForm />
      </Box>
    </Box>
  );
}
