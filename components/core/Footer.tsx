'use client';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/departures/')) {
    return null;
  }

  return (
    <footer className="mt-24 py-6 border-t border-gray-200 dark:border-gray-800 text-center">
      <div className="space-x-4 mb-2 flex justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">© Innenanzeiger 2024</p>
        <Link 
          href="/disclaimer" 
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-all"
        >
          Disclaimer
        </Link>
        <Link 
          href="/privacy" 
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-all"
        >
          Privacy Policy
        </Link>
        <Link 
          href="https://github.com/Phipsiart/Innenanzeiger" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-all"
        >
          Source Code
        </Link>
      </div>
    </footer>
  );
}
