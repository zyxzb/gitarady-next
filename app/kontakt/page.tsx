import { Metadata } from 'next';
import SubpageHeadLayout from '../_components/molecules/SubpageHeadLayout';
import ContactData from '../_components/atoms/ContactData';
import { Wrapper } from './Kontakt.styled';
import ContactForm from '../_components/organisms/ContactForm';
import Map from '../_components/atoms/Map';

const kontaktSubtitle = `Zapraszamy do kontaktu bezpośredniegu lub poprzez poniższy formularz.`;

export const metadata: Metadata = {
  title: 'Gitarady - Kontakt',
  description: kontaktSubtitle,
};

const Page = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Kontakt' subtitle={kontaktSubtitle} />
      <ContactData />
      <Wrapper>
        <ContactForm />
        <Map />
      </Wrapper>
    </div>
  );
};

export default Page;
