'use client';

import React, { useReducer, useContext, createContext } from 'react';
import global_reducer from '../_reducers/glogal_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../_utils/actions';

interface SidebarState {
  isSidebarOpen: boolean;
}

interface SidebarContextProps extends SidebarState {
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(global_reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};
