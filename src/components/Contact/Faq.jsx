import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';

/**
 * Component for Frequently Asked Questions
 * @returns Faq as rendered content
 */
export function Faq() {
  return (
    <Box sx={{ padding: 1, backgroundColor: 'primary.light', margin: 2, borderRadius: 1 }}>
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
    </Box>
  );
}
