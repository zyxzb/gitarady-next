import Faq from './_components/organisms/Faq';
import Hero from './_components/organisms/Hero';
import TextContent from './_components/organisms/TextContent';
import Videos from './_components/organisms/Videos';

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
