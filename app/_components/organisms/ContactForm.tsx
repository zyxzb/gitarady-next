'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Wrapper } from './ContactForm.styled';

const validationSchema = z.object({
  firstName: z.string().min(1, { message: 'Imię jest wymagane' }),
  email: z.string().min(1, { message: 'Email jest wymagany' }).email({
    message: 'Email musi być prawidłowy',
  }),
  message: z.string().min(1, { message: 'Wiadomość jest wymagana' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/sendEmail', data)
      .then(({ data }) => {
        router.push('/wyslano');
        toast.success(data.message);
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className='input-box'>
          <label htmlFor='firstName'>Imię:</label>
          <input
            id='firstName'
            placeholder='Imię...'
            autoComplete='off'
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className='error'>{errors.firstName.message}</span>
          )}
        </label>
        <label className='input-box'>
          <label htmlFor='email'> Twój email:</label>
          <input
            id='email'
            type='email'
            placeholder='@'
            autoComplete='off'
            {...register('email')}
          />
          {errors.email && (
            <span className='error'>{errors.email.message}</span>
          )}
        </label>
      </div>
      <label className='input-box'>
        Wiadomość:
        <textarea
          id='message'
          placeholder='Twoja wiadomość...'
          autoComplete='off'
          {...register('message')}
        />
        {errors.message && (
          <span className='error'>{errors.message.message}</span>
        )}
      </label>
      <button type='submit' value='Wyślij' className='btn' disabled={isLoading}>
        {isLoading ? 'Wysyłanie...' : 'Wyślij'}
      </button>
    </Wrapper>
  );
};

export default ContactForm;
