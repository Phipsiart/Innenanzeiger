"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RefreshData() {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
    }, 15000); // Refreshes every 15 seconds

    // Clears the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [router]);

  return null;
}
