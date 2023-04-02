import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import { ContactForm } from './ContactForm';
import { Faq } from './Faq';
import { MetaData } from '../MetaData';
import { BreadCrumbs } from '../BreadCrumbs';

/**
 * Main Component for Contact Page
 * @returns returns Contact html
 */
export function Contact() {
  return (
    <Container component='main' sx={{ maxWidth: 1920, marginY: 2 }}>
      {/* Meta Data */}
      <MetaData title='Re:mote | Contact' description='Contact us at Re:mote.' tags='Re:mote, contact, shop, communication' />

      {/* Breadcrumbs Navigation */}
      <BreadCrumbs />
      {/* Contact Header */}
      <Typography variant='h4' component='h1' sx={{ textAlign: 'center', marginBottom: 2 }}>
        Contact Us
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
      {/* Product Image */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' } }}>
        <Faq />
        <ContactForm />
      </Box>
    </Container>
  );
}
