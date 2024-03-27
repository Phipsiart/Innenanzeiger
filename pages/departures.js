import  {  useEffect } from "react";
import Head from "next/head";
import CountdownDisplay from "../components/CountdownDisplay";
import { useRouter } from "next/router";
import { Innenanzeiger } from "../lib/departures/Innenanzeiger";
import BOBLines from "../components/BOB/BOBLines";
import BOBClock from "../components/BOB/BOBClock";
export default function Home({ data }) {
  const router = useRouter();
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      router.replace(router.asPath);
    }, 15000); 
    return () => clearInterval(refreshInterval); 
  }, [router]);
  //define all vars.
  const Line = data.line;
  const Destination = data.Destination;
  const nextStopStatus = data.nextStopStatus;
  const stopovers = data.stopovers;
  const closestStop = stopovers[data.closestStopIndex];
  var nextStops = stopovers.slice(data.closestStopIndex + 1, data.closestStopIndex + 6) || "Bad Leberkas";
  var closestStopName = "Bad Leberkas"
  if (closestStop && closestStop && typeof closestStop.name === 'string') {
    closestStopName = closestStop.name;
  }
  
  if (data.closestStopIndex === -1) {
    const lastStop = stopovers[stopovers.length - 1]; // Get the last stop
    return (
      <>
      <div
      className="fixed top-0 h-12 z-[9999] bg-[#004e94] w-full"
    >
      <BOBClock />
      <span className="fixed top-0 start-3 text-white text-[2rem]">{Line}</span>
    </div>
{/**Departures Board Start */}
<div className="fixed left-[13.9rem]">
<svg width={84} height={750}>
  <line x1={40} y1={2} x2={40} y2={80} stroke="#2c4958" strokeWidth={3} />
  <rect width={20} height={20} x={30} y={79} fill="#2c4958" />
</svg>
</div>
<div className="fixed top-12 bg-white w-full h-[12rem] z-50">
<p className="text-[8rem] text-center text-[#2c4958] ">Endstation</p>  
</div>
<div className="bg-[#d3d3d3] mt-[15rem] h-[52.5rem]  text-[#2c4958]">
<div className="flex ml-[5.1rem] ">
<div className="block ml-18 mt-1">
  <p className="text-[1.3rem] text-center ">Plan</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{
  (lastStop && typeof lastStop.plannedArrival === 'string')
  ? lastStop.plannedArrival.slice(11, 16)
  : "06:99"
}
</p>
</div>

<div className="block ml-[5.2rem] mt-1">
  <p className="text-[1.3rem] text-center ">Aktuell</p>
  <p className="mt-1 text-[3.5rem] ml-[28] font-bold text-green-600">{
  (lastStop && typeof lastStop.arrival === 'string')
    ? lastStop.arrival.slice(11, 16)
    : "06:99"
}
  </p>
</div>
<div className="block ml-20 mt-9">
  <p className="text-[1.3rem] text-left ">{nextStopStatus[data.closestStopIndex]}</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{lastStop.name}</p>
</div>
<div className="block fixed right-5 mt-1">
  <p className="text-[1.3rem] text-left ">Gleis</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{lastStop.arrivalPlatform}</p>
</div>
</div>
<div className="flex justify-center mt-20 text-4xl">
  <p className="ml-20 mr-20">Wir bedanken uns für Ihre Reise mit der bayerischen Regiobahn und hoffen Sie bald wieder an Bord begrüßen zu dürfen.</p>
</div>

</div>
          </>
    );
  }
  return (
    <>
      <Head>
        <title>Innenanzeiger</title>
      </Head>
      <main>
      <div
          className="fixed top-0 h-12 z-[9999] bg-[#004e94] w-full"
        >
       <BOBClock />
          <span className="fixed end-36  text-[2rem]  text-white">
 {data.currentDate}
       </span>

          <span className="fixed top-0 start-3 text-white text-[2rem]">{data.Line}</span>
        </div>
  {/**Departures Board Start */}
  <div className="fixed top-12 bg-white w-full h-[12rem] z-50">
    <CountdownDisplay destination={Destination} nextStop={closestStop} />
  </div>
  <div className="bg-[#d3d3d3] mt-[15rem] h-[52.5rem]">
    <div className="flex text-[#2c4958]">
    <div className="ml-20 mt-1">
  <p className="text-[1.3rem] text-center ">Plan</p>
  <p className="mt-1 text-[3.5rem] font-bold ">    
  {closestStop['plannedDeparture']}

</p>
</div>
{/**Place SVG next stop overlay here */}
<BOBLines />
<div className="ml-[5.2rem] mt-1">
  <p className="text-[1.3rem] text-center ">Aktuell</p>
  <p className={`text-${closestStop['arrivalDelay'] > 300 ? 'red-500' : 'green-600'} mt-1 text-[3.5rem] font-bold text-green-600`}>
    {closestStop['departure']}
  </p>
</div>
<div className="ml-20 mt-1">
  <p className="text-[1.3rem] text-left ">{nextStopStatus[data.closestStopIndex]}</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{closestStopName}</p>
</div>
<div className="fixed right-5 mt-1">
  <p className="text-[1.3rem] text-left ">Gleis</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{closestStop.departurePlatform}</p>
</div>

    </div>
    {/**More departure cards start */}
    <div className="flex mt-8 mb-4 text-[#2c4958]">
    </div>
    {nextStops.map((stopover, index) => (
          <div key={index} className="flex text-[#2c4958]">
            <div className="ml-24 mt-2">
              <p className="mt-1 text-[2.6rem]">{
  (stopover && typeof stopover.plannedDeparture === 'string')
    ? stopover.plannedDeparture
    : stopover.plannedArrival
}
</p>
            </div>
            <div className="ml-[7.6rem] mt-3.5">
            <p className={`text-${stopover.arrivalDelay > 300 ? 'red-500' : 'green-600'} text-[2.6rem]`}>
  {stopover && typeof stopover === 'string'
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
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const tripId = context.query.tripId;
  const data = await Innenanzeiger(tripId)

  return {
    props: {
      data
    },
  };
}
