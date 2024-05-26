/* eslint-disable react/prop-types */

export function Appbar() {
  return (
    <div className="w-full shadow h-14 flex justify-between items-center px-4">
      <div className="font-bold text-2xl">Payment App</div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex justify-between">Hello User</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center">
          U
        </div>
      </div>
    </div>
  );
}
