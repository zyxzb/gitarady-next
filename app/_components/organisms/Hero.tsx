import Link from 'next/link';
import Image from 'next/image';

import image from '../../_images/mono2.png';
import { Wrapper } from './Hero.styled';

const Hero = () => {
  return (
    <Wrapper>
      <div className='section banner'>
        <div className='img-banner'>
          <Image
            src={image}
            alt='banner - osoba z gitarą'
            placeholder='empty'
            style={{
              opacity: 0.95,
              objectFit: 'contain',
            }}
            sizes='(max-width: 768px) 100vw, 50vw'
            fill
            priority={true}
          />
        </div>
        <div className='info'>
          <div>
            <h1 className='text'>
              <strong>
                Gitarady <span />
              </strong>
              <br />
              <span>Lekcje gitary i ukulele z pasją</span>
            </h1>
            <p>
              Jestem gitarzystą z ponad 15 letnim doświadczeniem. Gitara to moja
              wielka pasja, a nauka instrumentu jest dla mnie okazją, żeby
              dzielić się nią z innymi.
            </p>
            <p>
              Ze mną nauczysz się grać na: Gitarze akustycznej, elektrycznej i
              ukulele. Lekcje odbywają się stacjonarnie w Warszawie lub Online w
              całej Polsce.
            </p>
            <p>
              W swoich lekcjach stawiam na dobrą atmosferę, realne efekty i
              radość z grania. <br /> Program zawsze dostosowuje indywidualnie
              do ucznia i jego celów muzycznych.
            </p>
          </div>
          <Link className='btn' href='/kontakt'>
            Kontakt
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
