import GetConnections from '../../lib/getconnections';
import MainHeadline from '../../components/core/MainHeadline';
import ShowConnectionDetails from '../../components/core/ShowConnectionDetails';
import Header from '@/components/Header';
export default async function Connections({ params, searchParams }) {
  const data = await GetConnections(searchParams.from, searchParams.to, searchParams.departure);

  console.log(data);

  return (
    <>
      <Header />
      <MainHeadline text="Connections" />
      <p className="text-center pt-3">
        from {data[0].journeydata.journeystart} to {data[0].journeydata.journeydestination}
      </p>
      <div className="flex justify-center mt-12">
        <div className="max-w-[40rem]">
          {data.map((connection) => (
            <div
              key={`${connection.journeydata.plannedJourneyDeparture}-${connection.journeydata.plannedJourneyArrival}-${Math.floor(
                Math.random() * 0xffffff
              )
                .toString(16)
                .padEnd(6, '0')}`}
              className=" bg-gray-200 p-3 m-4 rounded-2xl relative"
            >
              <div className="flex text-[1.0rem] pr-44">
                <span className="ml-1 rounded p-1 bg-gray-800 font-bold text-white">
                  {connection.journeydata.plannedJourneyDeparture}
                </span>
                <span className="p-1">&nbsp;{'-'}</span>
                <span className="ml-1 rounded p-1 bg-gray-800 font-bold text-white">
                  {connection.journeydata.plannedJourneyArrival}
                </span>
                {connection.legs.length > 0 && (
                  <div className="bg-blue-500 ml-2 mt-1 mb-1 absolute right-3 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {connection.legs.length === 1 ? '1 Transfer' : `${connection.legs.length} Transfers`}
                  </div>
                )}
              </div>{' '}
              <ShowConnectionDetails legs={connection.legs} />
            </div>
          ))}
        </div>
      </div>{' '}
    </>
  );
}
