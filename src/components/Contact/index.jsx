import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'mui-image';
import hero from '../../assets/hero.png';
import { ContactForm } from './ContactForm';
import { Faq } from './Faq';
import { MetaData } from '../MetaData';
import { BreadCrumbs } from '../BreadCrumbs';

export function Contact() {
  return (
    <Box component='main' sx={{ maxWidth: 1920 }}>
      <MetaData title='Re:mote | Contact' description='Contact us at Re:mote.' tags='Re:mote, contact, shop, communication' />
      <BreadCrumbs />
      <Box sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' } }}>
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
    </Box>
  );
}
