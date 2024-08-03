import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@salemi-blog/shared';
import Link from 'next/link';

type IProps = {
  label: string;
  icon?: JSX.Element;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean | null;
};

export const SideNavItem: React.FC<IProps> = ({
  label,
  icon,
  path,
  active,
  isSidebarExpanded,
}) => {
  const renderExpandedItem = () => (
    <Link
      href={path}
      className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
        active
          ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
          : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
      }`}
    >
      <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );

  const renderItem = () => (
    <TooltipProvider delayDuration={70}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={path}
            className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
              active
                ? 'font-base text-sm bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
            }`}
          >
            <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
              {icon}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="px-3 py-1.5 text-x bg-slate-300 dark:bg-slate-800"
          sideOffset={10}
        >
          <span>{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return isSidebarExpanded ? renderExpandedItem() : renderItem();
};
