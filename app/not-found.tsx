import Link from 'next/link';
import SubpageHeadLayout from './_components/molecules/SubpageHeadLayout';

export default function NotFound() {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout
        title='Bład 404'
        subtitle='Błąd, nie znaleziono strony :('
      />
      <Link href='/' className='btn' style={{ margin: '0 auto' }}>
        Strona główna
      </Link>
    </div>
  );
}
