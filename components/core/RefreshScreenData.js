'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RefreshScreenData() {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      router.refresh();
    }, 17000); // Refreshes every 17 seconds

    // Clears the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [router]);

  return null;
}
