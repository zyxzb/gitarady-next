import { Metadata } from 'next';
import Image from 'next/image';
import SubpageHeadLayout from '../_components/molecules/SubpageHeadLayout';

import image from '@/app/public/images/music-recording.jpg';

const nagraniaSubtitle =
  'Jeżeli chcesz podrasować swój kawałek fajną gitarową partią lub chcesz, żebym naspisał dla Ciebie gotowy utwór - Z przyjemnością pomogę. Czuje się dobrze w wielu stylistykach muzycznych jak: Rock, Funk , Blues, Hard Rock, Lo Fi. Chętnie dowiem się więcej o Twoim projekcie. Dzwon lub pisz śmiało :)';

export const metadata: Metadata = {
  title: 'Gitarady - Nagrania',
  description: nagraniaSubtitle,
  alternates: {
    canonical: `${process.env.NEXT_DOMAIN}/nagrania`,
  },
};

const Page = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout title='Nagrania' subtitle={nagraniaSubtitle} />
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          maxHeight: '400px',
          minWidth: '100%',
          width: '100%',
        }}
      >
        <Image
          src={image}
          alt='nagrania'
          objectFit='cover'
          placeholder='blur'
          fill
        />
      </div>
    </div>
  );
};

export default Page;
