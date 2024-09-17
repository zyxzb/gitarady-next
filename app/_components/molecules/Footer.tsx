import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
  AiOutlinePhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { Wrapper } from './Footer.styled';
import BuiltBy from '../atoms/BuiltBy';

const Footer = () => {
  return (
    <Wrapper>
      <BuiltBy />
      <p className='copy'>
        Copyright &#169; {'  '}
        <strong>Gitarady</strong>
        {` ${new Date().getFullYear()}`}
      </p>
      <div className='contact'>
        <a href='tel:+48 512 135 077' aria-label='numer telefonu'>
          <AiOutlinePhone />
        </a>
        <a href='mailto:gitarady@gmail.com' aria-label='adres email'>
          <AiOutlineMail />
        </a>
        <a
          href='https://www.instagram.com/gitarady_lekcjegitary/'
          target='_blank'
          aria-label='konto na instagramie'
          rel='noopener noreferrer'
        >
          <AiOutlineInstagram />
        </a>
        <a
          href='https://www.facebook.com/GitaradyLekcjeGitary'
          target='_blank'
          aria-label='konto na facebooku'
          rel='noopener noreferrer'
        >
          <AiFillFacebook />
        </a>
        <a
          href='https://www.youtube.com/@lekcjegitary_gitarady'
          target='_blank'
          aria-label='kanał na youtube'
          rel='noopener noreferrer'
        >
          <AiOutlineYoutube />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
