import MainHeadline from '@/components/core/MainHeadline';
import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <MainHeadline text="Page not found (404)" />
      <p className="text-center mt-4">We are sorry, the requested Page could not be found.</p>
      <div className="flex justify-center mt-2">
        <Link
          href="/"
          className=" mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
}
