import Link from 'next/link';
export default function Header() {
  return (
    <>
      <div className="fixed z-[60] flex items-center bg-white backdrop-blur-xl   h-12 w-full place-items-center">
        <Link href="/">
          <span className="font-bold text-[1.2rem] ml-4 text-">Innenanzeiger</span>
        </Link>
      </div>
      <div className="border-t border-slate-200 w-[122rem] fixed top-12 z-[60]"></div>
      <Link
        href="/dashboard"
        className="fixed z-[60] top-0 end-2 mt-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2"
      >
        Dashboard
      </Link>
    </>
  );
}
