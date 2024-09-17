import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { Wrapper } from './ContactData.styled';

const ContactData = () => {
  return (
    <Wrapper className='contact'>
      <ul>
        <li>
          <a href='tel:+48 512 135 077' aria-label='telefon komórkowy'>
            <AiOutlinePhone />
            <span>512 135 077</span>
          </a>
        </li>
        <li>
          <a href='mailto:gitarady@gmail.com' aria-label='adres e-mail'>
            <AiOutlineMail />
            <span>gitarady@gmail.com</span>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default ContactData;
