'use client';

import { useEffect } from 'react';
import Pagination from './Pagination';
import { usePaginationContext } from '@/app/_context/PaginationContext';
import { ArticleCardType } from '@/app/_types';

type PaginationSectionTypes = {
  articles: ArticleCardType[];
};

const PaginationSection = ({ articles }: PaginationSectionTypes) => {
  const { setTotalArticles } = usePaginationContext();

  useEffect(() => {
    setTotalArticles(articles);
  }, [articles, setTotalArticles]);

  return <Pagination />;
};

export default PaginationSection;
