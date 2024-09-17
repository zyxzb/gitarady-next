'use client';

import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';
import { Wrapper } from './Pagination.styled';
import { usePaginationContext } from '@/app/_context/PaginationContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, pages } = usePaginationContext();

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(pages.length);
    }
  };
  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pages[0]);
    }
  };
  return (
    <Wrapper>
      <MdNavigateBefore onClick={prevPage} />
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        );
      })}
      <MdNavigateNext onClick={nextPage} />
    </Wrapper>
  );
};

export default Pagination;
