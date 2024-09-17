'use client';

import { useState, useContext, createContext } from 'react';
import { ArticleCardType } from '../_types';

interface PaginationContextProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalArticles: ArticleCardType[];
  setTotalArticles: React.Dispatch<React.SetStateAction<ArticleCardType[]>>;
  articlesPerPage: number;
  currentArticles: ArticleCardType[];
  pages: number[];
}

const PaginationContext = createContext<PaginationContextProps | undefined>(
  undefined,
);

export const PaginationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState<ArticleCardType[]>([]);
  const articlesPerPage = 5;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = totalArticles.slice(
    firstArticleIndex,
    lastArticleIndex,
  );

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalArticles.length / articlesPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalArticles,
        setTotalArticles,
        articlesPerPage,
        currentArticles,
        pages,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error(
      'usePaginationContext must be used within a PaginationProvider',
    );
  }
  return context;
};
