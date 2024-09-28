//The ultimate Innenanzeiger for following trains:
//https://www.bahnbilder.de/bild/deutschland~unternehmen~brb-bayerische-regiobahn/1368416/et-303--et-316-der.html

import { Innenanzeiger } from '@/lib/departures/Innenanzeiger';
import RefreshData from '@/components/core/RefreshData';
import BOBTopBar from '@/components/BOB/BOBTopBar';
import BOBNextStationBar from '@/components/BOB/BOBNextStationBar';
import CountdownDisplay from '@/components/BOB/CountdownDisplay';
import BOBAnsagen from '@/components/BOB/BOBAnsagen';
export default async function BOBInnenanzeiger({ tripId }) {
  console.log('Trip Id BOB Innenanzeiger', tripId);
  const data = await Innenanzeiger(tripId);
  const Line = data.line;
  const audiourl = process.env.AUDIO_URL;
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
      <BOBAnsagen
        IBNR={data.nextstop.currentstopid}
        conditionString={nextStopStatus[data.closestStopIndex]}
        audiourl={audiourl}
      />
      <BOBTopBar date={data.currentDate} line={data.Line} />
      {/**Background-wrapper start */}
      <div className="bg-[#d3d3d3] fixed top-[15rem] left-0 right-0 w-full bottom-0 z-[-200]"></div>
      {/**Background-wrapper End */}
      <BOBNextStationBar
        data={data}
        closeststopname={closestStopName}
        closestStop={closestStop}
        nextStopStatus={nextStopStatus}
      />
      {/**Departures Board Start */}
      <div className="fixed top-12 bg-white w-full h-[12rem] z-50">
        <CountdownDisplay destination={Destination} nextStop={closestStop} />
      </div>
      <div className="mt-[23rem] fixed">
        {/**More departure cards start */}
        <div className="flex mt-8 mb-4 text-[#2c4958]"></div>
        {data.closestStopIndex !== -1 &&
          nextStops.map((stopover, index) => (
            <div key={index} className="flex text-[#2c4958] text-[2.6rem] text-center">
              <div className="fixed left-[6.4rem]">
                <p className="text-center">
                  {' '}
                  {index === 0
                    ? stopover.plannedArrival
                    : stopover && typeof stopover.plannedArrival === 'string'
                      ? stopover.plannedDeparture
                      : stopover.plannedArrival}
                </p>
              </div>
              {/*This is the rectangle for the next stops */}
              <div className="fixed mt-[1.25rem] left-[16.4rem]">
                <svg width={24} height={24}>
                  <rect width={24} height={24} x={0} y={0} stroke="#2c4958" strokeWidth="2" fill="white" />
                </svg>
              </div>
              {index !== nextStops.length - 1 && (
                <div className="fixed left-[14.62rem]">
                  <svg>
                    <line x1={40} y1={44} x2={40} y2={100} stroke="#2c4958" strokeWidth={2} />
                  </svg>
                </div>
              )}
              <p className={`${stopover.arrivalDelay > 300 ? 'delay' : 'ontime'} fixed left-[21.3rem]`}>
                {index === -1
                  ? stopover.arrival
                  : stopover && typeof stopover === 'string'
                    ? stopover.departure
                    : stopover.arrival}
              </p>
              <p className="ml-[32.4rem]">{stopover.name}</p>
            </div>
          ))}
        {/**More departure cards End */}
      </div>

      {data.closestStopIndex === -1 ? ByeByeMessage : null}
    </>
  );
}
