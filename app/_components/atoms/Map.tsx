import { Wrapper } from './Map.styled';

const Map = () => {
  return (
    <Wrapper>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9768.724387448994!2d20.9327946!3d52.2582564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5563dfd8b57a94f8!2sNauka%20gry%20na%20gitarze%20i%20ukulele%20-%20Warszawa%20lub%20Online!5e0!3m2!1sen!2spl!4v1671474446543!5m2!1sen!2spl'
        title='mapa'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Wrapper>
  );
};

export default Map;
