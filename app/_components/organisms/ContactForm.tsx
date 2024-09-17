import React from 'react';
import { Wrapper } from './ContactForm.styled';
// import { navigate } from 'gatsby';
// // import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // const form = useRef();

  // const sendEmail = async (e: FormEvent) => {
  //   e.preventDefault();
  // try {
  //   const result = await emailjs.sendForm(
  //     `${process.env.GATSBY_SERVICE_ID}`,
  //     `${process.env.GATSBY_TEMPLATE_ID}`,
  //     form.current,
  //     `${process.env.GSTSBY_PUBLIC_KEY}`
  //   );
  //   console.log(result.text);
  //   navigate('/dziekujemy');
  // } catch (err) {
  //   console.log(err);
  //   alert(
  //     `Coś poszło nie tak :( \n Błąd: ${err.text} \n Spróbuj jeszcze raz!`
  //   );
  // }
  // };

  return (
    <Wrapper
    // ref={form}
    // onSubmit={sendEmail}
    >
      <div>
        <label>
          Imię:
          <input type='text' name='user_name' placeholder='Imię...' required />
        </label>
        <label>
          Twój email:
          <input type='email' name='user_email' placeholder='@' required />
        </label>
      </div>
      <label>
        Wiadomość:
        <textarea name='message' placeholder='Twoja wiadomość...' required />
      </label>
      <button type='submit' value='Wyślij' className='btn'>
        Wyślij
      </button>
    </Wrapper>
  );
};

export default ContactForm;
