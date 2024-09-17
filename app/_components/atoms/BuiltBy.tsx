'use client';

import { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const BuiltBy = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='built-by'>
      <button
        type='button'
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        built by B.
      </button>
      <div className='links'>
        <p className={isActive ? 'author visible' : 'author'}>
          <a href='tel:+48 515 586 867' aria-label='numer telefonu'>
            <AiOutlinePhone />
          </a>
          <a href='mailto:bartekzarzyk@gmail.com' aria-label='adres email'>
            <AiOutlineMail />
          </a>
        </p>
      </div>
    </div>
  );
};

export default BuiltBy;
