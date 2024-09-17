'use client';

import { links } from '../../_utils/constants';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrapper } from './Navigation.styled';
import Logo from '../atoms/Logo';
import { useSidebarContext } from '@/app/_context/SidebarContext';

const Navigation = () => {
  const { openSidebar, isSidebarOpen } = useSidebarContext();
  const pathname = usePathname();

  return (
    <Wrapper>
      <div className='logo-name'>
        <Logo />
        <span className='nav-text'>Gitarady - Nauka Gry na Gitarze</span>
      </div>
      <button
        className='nav-toggle'
        onClick={openSidebar}
        tabIndex={isSidebarOpen ? -1 : 0}
        aria-label='otwórz nawigacje'
      >
        <AiOutlineMenuUnfold />
      </button>
      <ul className='nav-links'>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link
                href={url}
                className={pathname === url ? 'active-link' : ''}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Navigation;
