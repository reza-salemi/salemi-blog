import { usePathname } from 'next/navigation';

import {
  IconUser,
  IconArticle,
  IconSettings,
  IconBell,
  IconHome,
  IconCategory,
} from '@tabler/icons-react';

import { SideNavItem } from './types';

export const NavItems = (): SideNavItem[] => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, slug: string) {
    return pathname.includes(slug);
  }

  return [
    {
      title: 'Home',
      path: '/',
      icon: <IconHome size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: <IconUser size={20} />,
      active: isNavItemActive(pathname, '/profile'),
      position: 'top',
      submenu: true,
      subMenuItems: [
        {
          title: 'All',
          path: '/projects',
          active: isNavItemActive(pathname, '/projects'),
        },
        {
          title: 'Web Design',
          path: '/projects/web-design',
          active: isNavItemActive(pathname, '/projects/web-design'),
        },
        {
          title: 'Graphic Design',
          path: '/projects/graphic-design',
          active: isNavItemActive(pathname, '/projects/graphic-design'),
        },
      ],
    },
    {
      title: 'Notifications',
      path: '/notifications',
      icon: <IconBell size={20} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'top',
    },
    {
      title: 'Category',
      path: '/category',
      icon: <IconCategory size={20} />,
      active: isNavItemActive(pathname, '/category'),
      position: 'top',
    },
    {
      title: 'Post',
      path: '/post',
      icon: <IconArticle size={20} />,
      active: isNavItemActive(pathname, '/post'),
      position: 'top',
      submenu: true,
      subMenuItems: [
        {
          title: 'All',
          path: '/projects',
          active: isNavItemActive(pathname, '/projects'),
        },
        {
          title: 'Web Design',
          path: '/projects/web-design',
          active: isNavItemActive(pathname, '/projects/web-design'),
        },
        {
          title: 'Graphic Design',
          path: '/projects/graphic-design',
          active: isNavItemActive(pathname, '/projects/graphic-design'),
        },
      ],
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <IconSettings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};
