'use client';

import { usePaginationContext } from '@/app/_context/PaginationContext';
import ArticleCard from '../molecules/ArticleCard';

const ArticleCards = () => {
  const { currentArticles } = usePaginationContext();

  return (
    <>
      {currentArticles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </>
  );
};

export default ArticleCards;
