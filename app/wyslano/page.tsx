import Link from 'next/link';
import { Metadata } from 'next';
import SubpageHeadLayout from '../_components/molecules/SubpageHeadLayout';

export const metadata: Metadata = {
  title: 'Gitarady - Dziękujemy za Kontakt!',
};

const Page = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout
        title='Poszło! ✉'
        subtitle='Dziękujemy za kontakt! Odpiszemy na Twoją wiadomość tak szybko jak to możliwe 🙂'
      />
      <Link
        href='/'
        className='btn'
        style={{
          margin: '0 auto',
          fontSize: '14px',
        }}
      >
        Strona Główna
      </Link>
    </div>
  );
};

export default Page;
