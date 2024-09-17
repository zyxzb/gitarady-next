import { Wrapper } from './Videos.styles';
import { BiLinkExternal } from 'react-icons/bi';

const Videos = () => {
  return (
    <Wrapper className='section'>
      <div className='title'>
        <a
          href='https://goo.gl/maps/qXDg5fkj1L3jCZW58'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='oceny w google'
        >
          <h2>
            ZOBACZ NASZE OCENY W GOOGLE
            <BiLinkExternal />
          </h2>
        </a>
      </div>
      <div className='videos section-center'>
        <iframe
          src='https://www.youtube.com/embed/7JvjzwH_Q6o'
          title='Shape of You by Ed Sheeran in 4 Steps'
          frameBorder='0'
          allowFullScreen
          aria-hidden='true'
          tabIndex={-1}
          loading='lazy'
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/7JvjzwH_Q6o/?autoplay=1><img src=https://img.youtube.com/vi/7JvjzwH_Q6o/hqdefault.jpg alt='Gitarady, lekcje gry na gitarze- Shape of You by Ed Sheeran in 4 Steps'><span>▶</span></a>`}
        ></iframe>
        <iframe
          src='https://www.youtube.com/embed/UJ9eGN6SHFM'
          title='Improwizacja Am'
          frameBorder='0'
          allowFullScreen
          aria-hidden='true'
          tabIndex={-1}
          loading='lazy'
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/UJ9eGN6SHFM/?autoplay=1><img src=https://img.youtube.com/vi/UJ9eGN6SHFM/hqdefault.jpg alt='Gitarady, lekcje gry na gitarze - Improwizacja Am'><span>▶</span></a>`}
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default Videos;
