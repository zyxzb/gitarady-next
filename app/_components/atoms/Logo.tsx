import Link from 'next/link';
import Image from 'next/image';

import logo from '../../_images/logo.png';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='logo-container'>
        <Image
          src={logo}
          alt='Gitarady - lekcje gitary - logo'
          className='logo-img'
          fill
          sizes='80px'
        />
      </div>
    </Link>
  );
};

export default Logo;
