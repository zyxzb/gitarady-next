'use client';

import { usePaginationContext } from '@/app/_context/PaginationContext';
import ArticleCard from '../organisms/ArticleCard';
import ArticleCards from './ArticleCards';

const ArticleSectionWrapper = () => {
  const { currentArticles } = usePaginationContext();

  return (
    <ArticleCards>
      {currentArticles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </ArticleCards>
  );
};

export default ArticleSectionWrapper;
