import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { Logo } from '../UI/Header';

/**
 * Component for Frequently Asked Questions
 * @returns Faq as rendered content
 */
export function Faq() {
  return (
    <Box sx={{ padding: 1, borderRadius: 1 }}>
      <Logo />
      <Typography variant='body1' sx={{ padding: 1, marginY: 1 }}>
        You can always contact us, no matter your inquiry, but perhaps you find what you're looking for in our provided FAQ below:
      </Typography>
      {/* Shipping */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ color: 'secondary.dark' }} variant='body1'>
            Shipping
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* My Order */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ color: 'secondary.dark' }} variant='body1'>
            My Order
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Return Policy */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ color: 'secondary.dark' }} variant='body1'>
            Return Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Payment Options */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ color: 'secondary.dark' }} variant='body1'>
            Payment Options
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Contact Options */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ color: 'secondary.dark' }} variant='body1'>
            Contact Options
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
