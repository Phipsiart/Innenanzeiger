import CountdownDisplay from '@/components/BOB/CountdownDisplay';
import { Innenanzeiger } from '@/lib/departures/Innenanzeiger';
import BOBLines from '@/components/BOB/BOBLines';
import BOBClock from '@/components/BOB/BOBClock';
import RefreshData from '@/components/core/RefreshData';

export default async function BOBInnenanzeiger({ tripId }) {
  console.log('Trip Id BOB Innenanzeiger', tripId);
  const data = await Innenanzeiger(tripId);
  const Line = data.line;
  const Destination = data.Destination;
  const nextStopStatus = data.nextStopStatus;
  const stopovers = data.stopovers;
  const closestStop = data.closestStopIndex !== -1 ? stopovers[data.closestStopIndex] : stopovers[stopovers.length - 1];
  var nextStops = stopovers.slice(data.closestStopIndex + 1, data.closestStopIndex + 6) || 'Bad Leberkas';
  console.log(nextStops.length);
  var closestStopName = 'Bad Leberkas';
  if (closestStop && closestStop && typeof closestStop.name === 'string') {
    closestStopName = closestStop.name;
  }
  const ByeByeMessage = (
    <p className="text-center fixed text-[#2c4958] top-[30rem] text-4xl ml-10 mr-10">
      Dieser Zug endet dort. Wir bedanken uns für Ihre Reise und hoffen sie bald wieder an Bord begrüßen zu dürfen.
    </p>
  );
  return (
    <>
      <RefreshData />
      <div className="fixed top-0 h-12 z-[9999] bg-[#004e94] w-full">
        <BOBClock />
        <span className="fixed end-48  text-[2rem]  text-white">{data.currentDate}</span>

        <span className="fixed top-0 start-3 text-white text-[2rem]">{data.Line}</span>
      </div>
      {/**Background-wrapper start */}
      <div className="bg-[#d3d3d3] fixed top-[15rem] left-0 right-0 w-full bottom-0 z-[-200]"></div>
      {/**Background-wrapper End */}

      {/**Departures Board Start */}
      <div className="fixed top-12 bg-white w-full h-[12rem] z-50">
        <CountdownDisplay destination={Destination} nextStop={closestStop} />
      </div>
      <div className="mt-[15rem]">
        <div className="flex text-[#2c4958]">
          <div className="ml-20 mt-1">
            <p className="text-[1.3rem] text-center ">Plan</p>
            <p className="mt-1 text-[3.5rem] font-bold ">
              {data.closestStopIndex === -1
                ? data.stopovers[data.totalstops - 1].plannedArrival
                : closestStop.plannedDeparture}
            </p>
          </div>
          {/**Place SVG next stop overlay here */}
          <BOBLines numLines={data.stopsleft} />
          <div className="ml-[5.2rem] mt-1">
            <p className="text-[1.3rem] text-center ">Aktuell</p>
            <p
              className={`${closestStop['arrivalDelay'] > 300 ? 'delay' : 'ontime'} mt-1 text-[3.5rem] font-bold text-green-600`}
            >
              {data.closestStopIndex === -1 ? data.stopovers[data.totalstops - 1].arrival : closestStop.departure}
            </p>
          </div>
          <div className="ml-[4.4rem] mt-1">
            <p className="text-[1.3rem] text-left ">
              {data.closestStopIndex === -1 ? 'Endstation' : nextStopStatus[data.closestStopIndex]}
            </p>
            <p className="mt-1 text-[3.5rem] font-bold ">{closestStopName}</p>
          </div>
          <div className="fixed right-5 mt-1">
            <p className="text-[1.3rem] text-left ">Gleis</p>
            <p className="mt-1 text-[3.5rem] font-bold ">
              {data.closestStopIndex === -1
                ? data.stopovers[data.totalstops - 1].arrivalPlatform
                : closestStop.departurePlatform}
            </p>
          </div>
        </div>
        {/**More departure cards start */}
        <div className="flex mt-8 mb-4 text-[#2c4958]"></div>
        {data.closestStopIndex !== -1 &&
          nextStops.map((stopover, index) => (
            <div key={index} className="flex text-[#2c4958]">
              <div className="ml-24 mt-2">
                <p className="mt-1 text-[2.6rem]">
                  {index === 0
                    ? stopover.plannedArrival
                    : stopover && typeof stopover.plannedArrival === 'string'
                      ? stopover.plannedDeparture
                      : stopover.plannedArrival}
                </p>
              </div>
              <div className="ml-[8rem] mt-3.5">
                <p className={`${stopover.arrivalDelay > 300 ? 'delay' : 'ontime'} text-[2.6rem]`}>
                  {index === -1
                    ? stopover.arrival
                    : stopover && typeof stopover === 'string'
                      ? stopover.departure
                      : stopover.arrival}
                </p>
              </div>
              <div className="ml-[6.2rem] mt-3.5">
                <p className="text-[2.5rem] ">{stopover.name}</p>
              </div>
            </div>
          ))}
        {/**More departure cards End */}
      </div>

      {data.closestStopIndex === -1 ? ByeByeMessage : null}
    </>
  );
}
