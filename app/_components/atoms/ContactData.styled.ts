'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      margin: 10px auto;
      a {
        color: var(--main-color);
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        svg {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }
  }
  @media (min-width: 576px) {
    ul {
      flex-direction: row;
      li {
        margin: 1rem;
        a {
          font-size: 1.3rem;
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;
