'use client';

import { links } from '../../_utils/constants';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../atoms/Logo';
import { Wrapper } from './Sidebar.styled';
import { useSidebarContext } from '@/app/_context/SidebarContext';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const pathname = usePathname();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <div>
            <Logo />
          </div>
          <button
            type='button'
            className='close-btn'
            onClick={closeSidebar}
            tabIndex={isSidebarOpen ? 0 : -1}
            aria-label='zamknij nawigacje'
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  href={url}
                  onClick={closeSidebar}
                  className={pathname === url ? 'active-link' : ''}
                  tabIndex={isSidebarOpen ? 0 : -1}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
