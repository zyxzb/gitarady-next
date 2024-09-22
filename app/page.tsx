import { Metadata } from 'next';
import Faq from './_components/organisms/Faq';
import Hero from './_components/organisms/Hero';
import TextContent from './_components/organisms/TextContent';
import Videos from './_components/organisms/Videos';

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_DOMAIN,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TextContent />
      <Videos />
      <Faq />
    </>
  );
}
