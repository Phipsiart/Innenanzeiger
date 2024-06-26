import MainHeadline from '../components/core/MainHeadline';
import Link from 'next/link';
import Header from '@/components/Header';
export default function HomePage() {
  return (
    <>
      <Header />
      <MainHeadline text="Innenanzeiger" />
      <div className="flex justify-center mt-12">
        <div className="max-w-[30rem]">
          <p>
            Welcome to Innenanzeiger. Here you can emulate the passenger information system displays of various railway
            companies.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/search"
          className=" mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2"
        >
          Search
        </Link>
      </div>
    </>
  );
}
