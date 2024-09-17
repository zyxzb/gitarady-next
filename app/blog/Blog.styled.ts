'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  min-height: calc(100vh - 81px);
  &.section {
    padding: 10rem 0 5rem;
  }
  .paginate-wrapper {
    flex: 1;
  }
`;
