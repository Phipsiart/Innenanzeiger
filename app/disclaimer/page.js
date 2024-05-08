import MainHeadline from '@/components/core/MainHeadline';
export default function DisclamerPage() {
  return (
    <>
      <MainHeadline text="Disclaimer"></MainHeadline>
      <div className="flex justify-center mt-12 mr-10 ml-10">
        <div className="max-w-lg">
          <p>
            Welcome to Innenanzeiger. Here you can select a train and then view it using the Interior Display simulation
            (a screen-like interface as if you were sitting in the same train). Bayerische Oberlandbahn & S-Bahn München
            similar screens (currently in beta) are currently supported. You can also select trains from other railway
            companies, but they will probably not be displayed correctly. As this is a simulation, the content here may
            well differ from the actual representations in the trains.
          </p>
          <div className="bg-red-700 p-4 rounded-2xl mt-8 font-bold">
            <p className="text-white">
              {' '}
              This project is an emulation of various displays from railway companies in Germany. All brands and
              trademarks, including but not limited to Bayerische Regiobahn and S-Bahn München are used solely for the
              purpose of creating a realistic emulation. They do not indicate any kind of connection, endorsement, or
              authorization by the respective companies. All rights belong to their respective owners.{' '}
            </p>
            <p className="text-white">
              The data on this website is also provided without warranty. Use of this website is at your own risk. We
              cannot be held liable for any damages.{' '}
            </p>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
