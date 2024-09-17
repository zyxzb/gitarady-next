import { Metadata } from 'next';
import Table from '../_components/atoms/Table';
import SubpageHeadLayout from '../_components/molecules/SubpageHeadLayout';

export const metadata: Metadata = {
  title: 'Gitarady - Cennik',
  description:
    'Indywidualne lekcje instrumentu są najprzyjemniejszą, najszybszą i najbardziej skuteczną formą nauki gry na gitarze. Dzięki indywidualnemu podejściu do lekcji szybko osiągniesz zamierzone cele muzyczne',
};

const Page = () => {
  return (
    <div className='section section-center'>
      <SubpageHeadLayout
        title='Cennik'
        subtitle='Indywidualne lekcje instrumentu są najprzyjemniejszą, najszybszą i
          najbardziej skuteczną formą nauki gry na gitarze. Dzięki
          indywidualnemu podejściu do lekcji szybko osiągniesz zamierzone cele
          muzyczne'
      />
      <Table />
    </div>
  );
};

export default Page;
