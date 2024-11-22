import MainHeadline from '../components/core/MainHeadline';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-black min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header Section */}
          <section className="text-center">
            <MainHeadline text="Innenanzeiger" subtitle="Recreate the unique vibe of German train interiors with a stunning display that showcases upcoming stops, connections, and more. Whether for nostalgia or aesthetics, this project is your ticket to an unforgettable experience." />
          </section>

          {/* Feature Section */}
          <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            {/* Left: Image */}
            <div className="flex-1">
              <Image
                src="/home/brb-display.jpg" // Replace with actual image path
                alt="Train interior display"
                width={700}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 max-w-lg text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                A Display That Brings Trains to Life
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This isn&apos;t just a display—it&apos;s a piece of art. Modeled after the real-life train displays found across Germany, this project combines practicality with modern aesthetics to create something truly unique.
              </p>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                From displaying station names to upcoming connections, it&apos;s like having your very own public transportation experience at home—without needing a ticket.
              </p>
              <div className="mt-8">
                <Link
                  href="/search"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-gradient-to-r from-gray-900 to-black text-white dark:from-white dark:to-gray-300 dark:text-black rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2"
                >
                  Explore Connections
                </Link>
              </div>
            </div>
          </section>

          {/* Currently Supported Displays Section */}
{/* Currently Supported Displays Section */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
    Currently Supported Displays
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* U-Bahn München */}
    <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <div className='flex justify-center'>
      <Image
        src="/home/u-bahn-muc-display.png" // Replace with actual image path
        alt="U-Bahn München Display"
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        U-Bahn München
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Iconic subway display for Munich&apos;s underground network, showing stops and arrival times.
      </p>
    </div>
    {/* S-Bahn München */}
    <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
    <div className='flex justify-center'>
      <Image
        src="/home/s-bahn-muc-display.png" // Replace with actual image path
        alt="S-Bahn München Display"
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        S-Bahn München
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Classic display for Munich&apos;s suburban train network, with route details and connections.
      </p>
    </div>
    {/* Bayerische Regiobahn */}
    <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
    <div className='flex justify-center'>
    <Image
        src="/home/brb-display.jpg" // Replace with actual image path
        alt="Bayerische Regiobahn Display"
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Bayerische Regiobahn
      </h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Regional train display bringing the Bavarian countryside to your screen.
      </p>
    </div>
  </div>
</section>
{/* How Is It Possible Section */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
    Special Thanks
  </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-center">
  A heartfelt thank you to <a href="https://github.com/derhuerst/db-rest" className="text-blue-600 hover:underline dark:text-blue-400">db-rest</a> API&apos;s creator, <a href="https://github.com/derhuerst" className="text-blue-600 hover:underline dark:text-blue-400">derhuerst</a>.
</p>
</section>

        </div>
      </main>
    </>
  );
}
