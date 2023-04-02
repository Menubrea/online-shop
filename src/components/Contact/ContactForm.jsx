import { Button, FormControl, Box, FormHelperText, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().min(3).max(20).required(),

  subject: yup.string().min(3).max(30).required(),

  email: yup.string().email().required(),

  body: yup.string().min(3).max(280).required(),
});

function onSubmit(data) {
  console.log(data);
}

/**
 * Component for Contact Form
 * @returns rendered ContactForm
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Box sx={{ padding: 1, marginY: { sm: 2, md: 0 } }} onSubmit={handleSubmit(onSubmit)} component='form'>
      {/* Full Name */}
      <FormControl sx={{ display: 'block' }}>
        <TextField color='secondary' fullWidth label='Full Name' id='fullName' {...register('fullName')} />
        <FormHelperText>{errors.fullName?.message}</FormHelperText>
      </FormControl>

      {/* Email */}
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField color='secondary' fullWidth label='Email' id='email' {...register('email')} />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>

      {/* Subject */}
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField color='secondary' fullWidth label='Subject' id='subject' {...register('subject')} />
        <FormHelperText>{errors.subject?.message}</FormHelperText>
      </FormControl>

      {/* Content of Body */}
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField variant='filled' color='secondary' fullWidth rows={5} multiline label='Your Message' id='body' {...register('body')} />
        <FormHelperText>{errors.body?.message}</FormHelperText>
      </FormControl>

      {/* Submit Button */}
      <Button sx={{ marginTop: 2 }} fullWidth variant='contained' type='submit'>
        Send
      </Button>
    </Box>
  );
}
