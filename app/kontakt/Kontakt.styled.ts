'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3em;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
