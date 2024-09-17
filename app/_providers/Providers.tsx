'use client';

import { Toaster } from 'react-hot-toast';
import { PaginationProvider } from '../_context/PaginationContext';
import { SidebarProvider } from '../_context/SidebarContext';
import StyledComponentsRegistry from '../_lib/registry';
import { GlobalStyles } from '../_styles/GlobalStyles';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <SidebarProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </SidebarProvider>
      <Toaster />
    </StyledComponentsRegistry>
  );
};

export default Providers;
