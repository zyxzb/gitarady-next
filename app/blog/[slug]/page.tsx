import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Wrapper } from './Article.styled';
import { performRequest } from '@/app/_lib/datocms';
import { All_BLOG_POSTS_QUERY, getData } from '@/app/_utils/queries';
import { PostType } from '@/app/_types';
import ImageWithPlaiceholder from '@/app/_components/atoms/ImageWithPlaiceholder';

export const revalidate = 300;

async function getAllArticles(query: string) {
  const { allArticles } = await performRequest<{ allArticles: PostType[] }>(
    query,
  );
  return allArticles as PostType[];
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const { article } = await getData(params.slug);
  return {
    title: `${article.seoTags.title} - Gitarady`,
    description: article.seoTags.description,
    alternates: {
      canonical: `${process.env.NEXT_DOMAIN}/${params.slug}`,
    },
  };
};

export const generateStaticParams = async () => {
  const articles = await getAllArticles(All_BLOG_POSTS_QUERY);

  return articles.map((article: PostType) => ({
    slug: article.slug,
  }));
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { article } = await getData(params.slug);

  if (!article) return notFound();

  const {
    title,
    subtitle,
    paragraphShort,
    subtitleH3,
    content,
    date,
    image: { url },
  } = article;

  return (
    <Wrapper className='section section-center'>
      <div className='top'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className='center section'>
        <div className='image-wrapper'>
          <ImageWithPlaiceholder src={url} alt={title} fill objectFit='cover' />
        </div>
        <div className='text-wrapper'>
          <div dangerouslySetInnerHTML={{ __html: paragraphShort }} />
        </div>
      </div>
      <div className='bottom'>
        <h3>{subtitleH3}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className='section back-date'>
          <Link className='btn' href='/blog'>
            Powrót
          </Link>
          <span className='date'>Data publikacji: {date}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
