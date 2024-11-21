"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    activeheadline?: string;
    disablelinks?: boolean;
    showArrivalDepartureSwitch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeheadline, disablelinks, showArrivalDepartureSwitch }) => {
    const pathname = usePathname(); // Aktuellen Pfad abrufen
    const router = useRouter();
    const searchParams = useSearchParams(); // Suchparameter abrufen
    const currentIBNR = pathname.split('/')[2]; // IBNR aus dem Pfad extrahieren
    const [showArrivals, setShowArrivals] = useState<boolean>(searchParams.get('show') === 'arrivals'); // Zustand für Ankünfte

    // Effect, um den Zustand bei Änderung der Suchparameter zu aktualisieren
    useEffect(() => {
        setShowArrivals(searchParams.get('show') === 'arrivals');
    }, [searchParams]);

    const handleSwitch = () => {
        const newShow = showArrivals ? 'departures' : 'arrivals';
        router.push(`/arrivals/${currentIBNR}?show=${newShow}`);
    };

    return (
        <>
            <div className="fixed z-[60] top-0 flex items-center bg-white backdrop-blur-xl h-12 w-full place-items-center">
                <Link href="/">
                    <span className="font-bold text-[1.2rem] ml-4">
                        {activeheadline || 'Innenanzeiger'}
                    </span>
                </Link>
                {disablelinks ? null : (
                    <>
                                      <Link href={`/search`}>
                                      <span className="text-[1rem] ml-4 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-400 rounded-full px-4 py-2 transition-all duration-300 cursor-pointer">Explore Connections</span>
                                  </Link>              
                  <Link href='/search-station'>
                        <span className="text-[1rem] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-400 rounded-full px-4 py-2 transition-all duration-300 cursor-pointer">Departures & Arrivals</span>
                    </Link>
                </>
                )}
                    {showArrivalDepartureSwitch ? (
                        <div className='fixed right-2'>
                            <div className='relative flex items-center ml-4'>
                                <div
                                    onClick={handleSwitch}
                                    className={`relative inline-block w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${showArrivals ? 'bg-blue-600' : 'bg-gray-400'}`}
                                >
                                    <span
                                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${showArrivals ? 'translate-x-8' : ''}`}
                                    />
                                </div>
                                <div className="flex ml-2">
                                    <div className={`flex items-center transition-opacity duration-300 ${showArrivals ? 'opacity-100' : 'opacity-0'}`} style={{ width: '100px' }}>
                                        <Link href={`/arrivals/${currentIBNR}?show=arrivals`}>
                                            <span className="text-blue-600 font-semibold">Arrivals</span>
                                        </Link>
                                    </div>
                                    <div className={`flex items-center transition-opacity duration-300 ${showArrivals ? 'opacity-0' : 'opacity-100'}`} style={{ width: '100px' }}>
                                        <Link href={`/arrivals/${currentIBNR}?show=departures`}>
                                            <span className="text-gray-400 font-semibold">Departures</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
            </div>
            <div className="border-t border-slate-200 w-[122rem] fixed top-12 z-[60]"></div>
        </>
    );
};

const HeaderWrapper: React.FC<HeaderProps> = (props) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Header {...props} />
    </Suspense>
);

export default HeaderWrapper;
