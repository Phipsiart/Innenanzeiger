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
    </>
  );
}
