import AvailableTypesofConnections from './AvailableTypesofConnections';
import Image from 'next/image';
import ReplaceNames from '@/lib/filter/ReplaceNames';
import FormatDate from '@/lib/filter/FormatDate';

export default async function NextStopScreen({ nextstop }) {
  const API_INSTANCE = process.env.API_INSTANCE;
  const BASE_URL = process.env.BASE_URL;
  const BASE_PROTOCOL = process.env.BASE_PROTOCOL;
  
  try {
    const fetchdata = await fetch(
      `https://${API_INSTANCE}/stops/${nextstop.IBNR}/departures?results=5&taxi?false&duration=12800&national=false&nationalExpress=false`
    );
    if (!fetchdata.ok) {
      throw new Error(`Error fetching data: ${fetchdata.statusText}`);
    }
    const data = await fetchdata.json();

    const fetchexitside = await fetch(`${BASE_PROTOCOL}://${BASE_URL}/data/ubahn-muc/exit/Feldmoching.json`);
    if (!fetchexitside.ok) {
      throw new Error(`Error fetching exitside data: ${fetchexitside.statusText}`);
    }
    const exitside = await fetchexitside.json();

    return (
      <>
        {/*This line overlaps the line of the arrow */}
        <div className="z-[10200] top-0 left-[13rem] fixed p-4 h-[7rem] bg-white"></div>
        <div className="fixed left-[16rem] top-4 z-[10200] text-[1.8rem] block">
          <span>Nächster Halt</span>
          <p className="text-gray-500 italic">Next Stop</p>
        </div>
        <div className="bg-white fixed z-[9999] top-[7rem] left-0 bottom-0 h-screen right-0">
          <div className="fixed left-6">
            <span className="font-bold text-[5rem]">{nextstop.name}</span>
            <AvailableTypesofConnections products={nextstop.typeofconnections} />
            <div className="border-t border-gray-300 fixed mt-4 left-5 right-[23rem]"></div>
            <div className="fixed right-[23rem] mt-4 text-[1.3em]">
              <p>Abfahrten in Min.</p>
              <p className="text-gray-500 italic">Departures in min.</p>
            </div>
            <div className="flex text-[1.4rem] mt-4">
              <span>Verbindungen</span>
              <span className="text-gray-500 italic ml-4">Connections</span>
            </div>
            <div className="border-t border-gray-300 fixed mt-8 left-5 right-[23rem]"></div>
          </div>
          <div className="fixed top-[22rem] left-4">
            {data.departures.map((connection) => (
              <div className="flex mt-3" key={connection.tripId}>
                {connection.line.productName === 'U' ? (
                  <Image
                    src={`/train-lines/ubahn-muc/${connection.line.name.replace(/\s+/g, '')}.svg`}
                    height="64"
                    width="64"
                    className="mt-4"
                    alt={`${connection.line.name.trim()} U-Bahn Logo (illustrational)`}
                  />
                ) : (
                  <Image
                    className="fixed"
                    src={`/transportation-types/${connection.line.productName}.svg`}
                    height="55"
                    width="55"
                    alt={`${connection.line.productName} Logo (illustrational)`}
                  />
                )}
                <span className="text-[1.5rem] ml-[5rem] mt-3">
                  {connection.line.productName === 'U'
                    ? null
                    : connection.line.name.replace('STR', '').replace('BusSEV', '').replace('Bus', '')}
                </span>
                <span className="fixed left-56 text-[1.5rem] ml-4 mt-3 font-semibold">{ReplaceNames(connection.destination.name)}</span>
                <span className="fixed right-[23rem] text-[1.5rem] ml-4 mt-3">
                  {(() => {
                    const formattedtime = FormatDate(connection.when);
                    const [hours, minutes] = formattedtime.split(':').map(Number);
                    const now = new Date();
                    const departureTime = new Date();
                    departureTime.setHours(hours, minutes);
                    const diffInMinutes = Math.floor((departureTime - now) / 1000 / 60);
                    return diffInMinutes > 0 ? diffInMinutes : 0;
                  })()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("An error occurred:", error.message);
    return null;
  }
}
