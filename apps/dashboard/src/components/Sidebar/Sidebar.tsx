'use client';

import { Fragment } from 'react';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@salemi-blog/shared';
import {
  IconUser,
  IconInbox,
  IconArticle,
  IconCategory,
  IconTag,
  IconMessage,
  IconSettings,
  IconLockSquare,
  IconBell,
} from '@tabler/icons-react';
import { UserItem } from '../UserItem';
import Link from 'next/link';

const menuList = [
  {
    group: 'General',
    items: [
      {
        link: '/profile',
        text: 'Profile',
        icon: <IconUser />,
      },
      {
        link: '/inbox',
        text: 'Inbox',
        icon: <IconInbox />,
      },
      {
        link: '/notification',
        text: 'Notifications',
        icon: <IconBell />,
      },
    ],
  },
  {
    group: 'Content Management',
    items: [
      {
        link: '/posts',
        text: 'Posts',
        icon: <IconArticle />,
      },
      {
        link: '/categories',
        text: 'Categories',
        icon: <IconCategory />,
      },
      {
        link: '/tags',
        text: 'Tags',
        icon: <IconTag />,
      },
      {
        link: '/comments',
        text: 'Comments',
        icon: <IconMessage />,
      },
    ],
  },
  {
    group: 'Settings',
    items: [
      {
        link: '/',
        text: 'General Settings',
        icon: <IconSettings />,
      },
      {
        link: '/',
        text: 'Privacy',
        icon: <IconLockSquare />,
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu: any, key: number) => (
              <Fragment key={key}>
                <CommandGroup heading={menu.group}>
                  {menu.items.map((option: any, optionKey: number) => (
                    <Link href={option.link} key={optionKey}>
                      <CommandItem className="flex gap-2">
                        {option.icon}
                        {option.text}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </Fragment>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
