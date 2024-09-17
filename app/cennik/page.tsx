import { Metadata } from 'next';
import Table from '../_components/atoms/Table';
import SubpageHeadLayout from '../_components/molecules/SubpageHeadLayout';
import { performRequest } from '../_lib/datocms';
import { PricingType } from '../_types';
import { PRICING_QUERY } from '../_utils/queries';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Gitarady - Cennik',
  description:
    'Indywidualne lekcje instrumentu są najprzyjemniejszą, najszybszą i najbardziej skuteczną formą nauki gry na gitarze. Dzięki indywidualnemu podejściu do lekcji szybko osiągniesz zamierzone cele muzyczne',
};

const Page = async () => {
  const { allPricings } = await performRequest<{ allPricings: PricingType[] }>(
    PRICING_QUERY,
  );

  return (
    <div className='section section-center'>
      <SubpageHeadLayout
        title='Cennik'
        subtitle='Indywidualne lekcje instrumentu są najprzyjemniejszą, najszybszą i
          najbardziej skuteczną formą nauki gry na gitarze. Dzięki
          indywidualnemu podejściu do lekcji szybko osiągniesz zamierzone cele
          muzyczne'
      />
      <Table allPricings={allPricings} />
    </div>
  );
};

export default Page;
