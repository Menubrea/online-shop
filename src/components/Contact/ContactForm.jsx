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

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Box sx={{ padding: 1, margin: '0 1em 1em 1em', backgroundColor: 'white.main', borderRadius: 1 }} onSubmit={handleSubmit(onSubmit)} component='form'>
      <FormControl sx={{ display: 'block' }}>
        <TextField fullWidth label='Full Name' id='fullName' {...register('fullName')} />
        <FormHelperText>{errors.fullName?.message}</FormHelperText>
      </FormControl>
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField fullWidth label='Email' id='email' {...register('email')} />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField fullWidth label='Subject' id='subject' {...register('subject')} />
        <FormHelperText>{errors.subject?.message}</FormHelperText>
      </FormControl>
      <FormControl sx={{ display: 'block', marginTop: 2 }}>
        <TextField fullWidth rows={5} multiline label='Your Message' id='body' {...register('body')} />
        <FormHelperText>{errors.body?.message}</FormHelperText>
      </FormControl>
      <Button sx={{ marginTop: 2 }} fullWidth variant='contained' type='submit'>
        Send
      </Button>
    </Box>
  );
}
