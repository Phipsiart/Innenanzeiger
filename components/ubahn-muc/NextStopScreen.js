import AvailableTypesofConnections from './AvailableTypesofConnections';
import Image from 'next/image';
import ReplaceNames from '@/lib/filter/ReplaceNames';
import FormatDate from '@/lib/filter/FormatDate';
export default async function NextStopScreen({ nextstop, }) {
  const API_INSTANCE = process.env.API_INSTANCE;
  const fetchdata = await fetch(
    `https://${API_INSTANCE}/stops/${nextstop.IBNR}/departures?results=5&taxi?false&duration=12800&national=false&nationalExpress=false`
  );
  const data = await fetchdata.json();
  return (
    <>
    {/*This line overlaps the line of the arrow */}
    <div className='z-[10200] top-0 left-[13rem] fixed p-4 h-[7rem] bg-white'></div>
      <div className="fixed left-[16rem] top-4 z-[10200] text-[1.8rem] block">
        <span>Nächster Halt</span>
        <p className="text-gray-500 italic">Next Stop</p>
      </div>
      <div className="bg-white fixed z-[9999] top-[7rem] left-0 bottom-0 h-screen right-0">
        <div className="fixed left-6">
          <span className="font-bold text-[5rem]">{nextstop.name}</span>
          <AvailableTypesofConnections products={nextstop.typeofconnections} />
          <div className="border-t border-gray-300  fixed mt-4 left-5 right-[23rem]"></div>
          <div className="fixed right-[23rem] mt-4 text-[1.8rem]">
            <span>Abfahrten in Min.</span>
            <p className="text-gray-500 italic">Departure in Min.</p>
          </div>
          <div className="flex text-[1.8rem] mt-4">
            <span>Verbindungen</span>
            <span className="text-gray-500 italic ml-4">Connections</span>
          </div>
          <div className="border-t debug border-gray-300  fixed mt-12 left-5 right-[23rem]"></div>
        </div>
        <div className="fixed top-[26rem] left-4">
        {data.departures.map((connection) => (
  <>
    <div className="flex mt-3" key={connection.tripId}>
    {connection.line.productName === 'U' ? (
          <Image
            src={`/train-lines/ubahn-muc/${connection.line.name.replace(/\s+/g, '')}.svg`}
            height="64"
            width="64"
            className='mt-4'
            alt={`${connection.line.name.trim()} U-Bahn Logo (illustrational)`}
          ></Image>):
          (
      <Image
        className="fixed"
        src={`/transportation-types/${connection.line.productName}.svg`}
        height="55"
        width="55"
        alt={`${connection.line.productName} Logo (illustrational)`}
      ></Image>
          )}
      <span className="text-[2rem] ml-[5rem] mt-2">
        {connection.line.productName === 'U' ? (
          null
        ) : (
          connection.line.name.replace('STR', '').replace('BusSEV', '').replace('Bus', '')
        )}
      </span>
      <span className="fixed left-56 text-[2rem] ml-4 mt-2">{ReplaceNames(connection.destination.name)}</span>
      <span className="fixed right-[23rem] text-[2rem] ml-4 mt-2">
        {(() => {
          const formattedtime = FormatDate(connection.when);
          const [hours, minutes] = formattedtime.split(':').map(Number); // Assuming connection.time is in 'HH:MM' format
          const now = new Date();
          const departureTime = new Date();
          departureTime.setHours(hours, minutes);
          const diffInMinutes = Math.floor((departureTime - now) / 1000 / 60);
          return diffInMinutes > 0 ? diffInMinutes : 0;
        })()}
      </span>
    </div>
  </>
))}
        </div>
      </div>
    </>
  );
}
