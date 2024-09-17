'use client';

import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  .image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    overflow: hidden;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    gap: 12px;
    width: 100%;
    .article-content {
      line-height: 24px;
      height: max-content;
      margin-bottom: 10px;
    }
    .title-date {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      justify-content: space-between;
      .title {
        font-size: 2rem;
      }
      .date {
        color: var(--main-color);
        strong {
          margin-left: 5px;
          white-space: nowrap;
        }
      }
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 50px;
    align-items: center;
    .image-wrapper {
      margin-top: 0;
      margin-left: 30px;
      width: 60%;
    }
  }

  /* Animacja ładowania obrazu */
  .animate-pulse {
    animation: pulse 1.5s ease-in-out infinite;
  }

  .bg-gray {
    background-color: rgba(100, 100, 100, 0.1);
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
