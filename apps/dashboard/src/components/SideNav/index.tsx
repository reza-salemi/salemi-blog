'use client';

import { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { cn } from '@salemi-blog/shared/utils';
import { NavItems } from '../../menu-list';
import { ThemeToggle } from '../ThemeToggle';
import { SideNavItem } from './SideNavItem';

export const SideNav = () => {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState<null | boolean>(
    null
  );

  // default state if window is not defined
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sidebarStatus = window.localStorage.getItem('sidebarExpanded');
      if (sidebarStatus) {
        setIsSidebarExpanded(true);
      }
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        'sidebarExpanded',
        JSON.stringify(isSidebarExpanded)
      );
    }
  };

  return (
    <aside
      className={cn(
        isSidebarExpanded
          ? 'flex-[1_1_200px] max-w-[200px]'
          : 'flex-[1_1_68px] max-w-[68px]',
        'border-r sticky top-0 h-screen transition-all duration-300 ease-in-out transform bg-accent'
      )}
    >
      <div className="flex flex-col w-full overflow-y-auto break-words px-4">
        {/* Top */}
        <div className="mt-4 relative pb-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              if (item.position !== 'bottom') {
                return (
                  <div className="space-y-1" key={item.path}>
                    <SideNavItem
                      label={item.title}
                      icon={item.icon}
                      path={item.path}
                      active={item.active}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="fixed bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
          <ThemeToggle isDropDown={true} />
          {navItems.map((item) => {
            if (item.position === 'bottom') {
              return (
                <div className="space-y-1" key={item.path}>
                  <SideNavItem
                    label={item.title}
                    icon={item.icon}
                    path={item.path}
                    active={item.active}
                    isSidebarExpanded={isSidebarExpanded}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="top-[350px] relative">
        <button
          type="button"
          className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          onClick={toggleSidebar}
        >
          {isSidebarExpanded ? (
            <IconChevronLeft size={16} className="stroke-foreground" />
          ) : (
            <IconChevronRight size={16} className="stroke-foreground" />
          )}
        </button>
      </div>
    </aside>
  );
};
