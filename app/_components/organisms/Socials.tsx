import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { Wrapper } from './Socials.styled';

const Socials = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Socials;
