import { Wrapper } from './SubpageHeadLayout.styled';

type SubpageHeadLayoutProps = {
  title: string;
  subtitle: string;
};

const SubpageHeadLayout = ({ title, subtitle }: SubpageHeadLayoutProps) => {
  return (
    <Wrapper>
      <h1>
        <strong>
          {title}
          <span />
        </strong>
      </h1>
      <h2>{subtitle}</h2>
    </Wrapper>
  );
};

export default SubpageHeadLayout;
