import sanitizeHtml from 'sanitize-html';
import { Metadata } from 'next';

import { performRequest } from '@/app/_lib/datocms';
import { Wrapper } from './Blog.styled';
import { All_BLOG_POSTS_QUERY } from '../_utils/queries';
import { PostType } from '../_types';
import PaginationSection from '../_components/molecules/PaginationSection';
import ArticleCards from '../_components/organisms/ArticleCards';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Gitarady - Blog',
  alternates: {
    canonical: `${process.env.NEXT_DOMAIN}/blog`,
  },
};

const Page = async () => {
  const { allArticles } = await performRequest<{ allArticles: PostType[] }>(
    All_BLOG_POSTS_QUERY,
  );

  if (allArticles.length === 0) return <p>Brak artykułów :/</p>;

  const articles = allArticles.map((article) => ({
    id: article.id,
    image: article.image.url,
    slug: article.slug,
    title: article.title,
    paragraphShort: sanitizeHtml(article.paragraphShort), // Clean the HTML tags safely
    date: new Date(article._firstPublishedAt).toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return (
    <Wrapper className='section section-center'>
      <ArticleCards />
      <PaginationSection articles={articles} />
    </Wrapper>
  );
};

export default Page;
