import Link from 'next/link';
import { Wrapper } from '../organisms/ArticleCard.styled';
import { ArticleCardType } from '@/app/_types';
import Image from 'next/image';
import { useState } from 'react';

type ArticleCardProps = {
  article: ArticleCardType;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, date, paragraphShort, slug, image } = article;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Wrapper>
      <div className='content-wrapper'>
        <div className='title-date'>
          <h2 className='title'>{title}</h2>
          <p className='date'>
            Data publikacji:
            <strong>{date}</strong>
          </p>
        </div>
        <div
          className='article-content'
          dangerouslySetInnerHTML={{
            __html: paragraphShort.substring(0, 330).concat('...'),
          }}
        />
        <Link href={'/blog/' + slug} className='btn'>
          Czytaj...
        </Link>
      </div>
      <div className='image-wrapper'>
        <Image
          src={image}
          alt={slug}
          fill
          objectFit='cover'
          loading='lazy'
          data-loaded={isImageLoaded ? 'true' : 'false'}
          onLoad={() => setIsImageLoaded(true)}
          className={`${isImageLoaded ? '' : 'animate-pulse bg-gray'}`}
        />
      </div>
    </Wrapper>
  );
};

export default ArticleCard;
