export const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="flex items-center justify-center avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700]">
        <p>MS</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Mohammad Reza</p>
        <p className="text-[12px] text-neutral-500">en.salemi@gmail.com</p>
      </div>
    </div>
  );
};
