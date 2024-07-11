import { twMerge } from "tailwind-merge";

export default function Card({ value, icon, className }) {
  return (
    <div
      className={twMerge(
        `m-auto mt-5 flex w-4/5 cursor-pointer flex-row items-center justify-center gap-3 rounded-full border-b-2 border-gray-800 bg-slate-50 px-3 py-2 font-bold ${className}`,
      )}
    >
      {icon || null}
      <button>{value}</button>
    </div>
  );
}
