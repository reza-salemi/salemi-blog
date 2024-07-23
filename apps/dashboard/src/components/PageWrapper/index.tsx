import { ReactNode } from 'react';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 dark:bg-slate-900 flex-grow pb-4">
      {children}
    </div>
  );
};
