import  { useContext, useEffect, useState } from "react";
import Head from "next/head";
import CountdownDisplay from "../components/CountdownDisplay";
import { useRouter } from "next/router";
export default function Home({ Destination, Line, closestStopIndex, stopovers, nextStopStatus }) {
  const [time, setTime] = useState("");
  const [blink, setBlink] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const separator = blink ? ":" : " ";
      setTime(`${hours}${separator}${minutes}`);
      setBlink(!blink);
    }, 1000);
    return () => clearInterval(interval);
  }, [blink]);
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      router.replace(router.asPath);
    }, 15000); 
    return () => clearInterval(refreshInterval); 
  }, [router]);
  const closestStop = stopovers[closestStopIndex];
  var nextStops = stopovers.slice(closestStopIndex + 1, closestStopIndex + 6) || "Bad Leberkas";
  var closestStopName = "Bad Leberkas"
  if (closestStop && closestStop.stop && typeof closestStop.stop.name === 'string') {
    closestStopName = closestStop.stop.name.replace(/München-/g, "").split("Gl.")[0].trim();
  }
  
  if (closestStopIndex === -1) {
    const lastStop = stopovers[stopovers.length - 1]; // Get the last stop
    return (
      <>
      <div
      className="fixed top-0 h-12 z-[9999] bg-[#004e94] w-full"
    >
      <span className="fixed end-3  text-[2rem]  text-white">
        {time}
      </span>
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
<div className="block ml-24 mt-1">
  <p className="text-[1.3rem] text-center ">Plan</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{
    lastStop['plannedDeparture']
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
  <p className="text-[1.3rem] text-left ">{nextStopStatus[closestStopIndex]}</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{lastStop.stop.name.replace(/München-/g, "")}</p>
</div>
<div className="block fixed right-5 mt-1">
  <p className="text-[1.3rem] text-left ">Gleis</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{lastStop.departurePlatform}</p>
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
          <span className="fixed end-3  text-[2rem]  text-white">
            {time}
          </span>
          <span className="fixed end-36  text-[2rem]  text-white">
      25.03.2024
      </span>

          <span className="fixed top-0 start-3 text-white text-[2rem]">{Line}</span>
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
  {closestStop['plannedDeparture'].slice(0, -9).slice(11)}

</p>
</div>
<div className="fixed left-[13.9rem]">
<svg width={84} height={750}>
  <line x1={40} y1={62} x2={40} y2={80} stroke="#2c4958" strokeWidth={3} />
  <rect width={20} height={20} x={30} y={79} fill="#2c4958" />
  <line x1={40} y1={77} x2={40} y2={204} stroke="#2c4958" strokeWidth={3} />
  <rect
    width={20}
    height={20}
    x={30}
    y={204}
    stroke="#2c4958"
    strokewidth={3}
    fill="white"
  />
  <line x1={40} y1={224} x2={40} y2={290} stroke="#2c4958" strokeWidth={3} />
  <rect
    width={20}
    height={20}
    x={30}
    y={289}
    stroke="#2c4958"
    strokewidth={3}
    fill="white"
  />
  <line x1={40} y1={310} x2={40} y2={380} stroke="#2c4958" strokeWidth={3} />
  <rect
    width={20}
    height={20}
    x={30}
    y={360}
    stroke="#2c4958"
    strokewidth={3}
    fill="white"
  />
  <line x1={40} y1={380} x2={40} y2={465} stroke="#2c4958" strokeWidth={3} />
  <rect
    width={20}
    height={20}
    x={30}
    y={438}
    stroke="#2c4958"
    strokewidth={3}
    fill="white"
  />
  <line x1={40} y1={464} x2={40} y2={515} stroke="#2c4958" strokeWidth={3} />
  <rect
    width={20}
    height={20}
    x={30}
    y={514}
    stroke="#2c4958"
    strokewidth={3}
    fill="white"
  />
</svg>

</div>

<div className="ml-[5.2rem] mt-1">
  <p className="text-[1.3rem] text-center ">Aktuell</p>
  <p className={`text-${closestStop['arrivalDelay'] > 300 ? 'red-500' : 'green-600'} mt-1 text-[3.5rem] font-bold text-green-600`}>
    {closestStop['departure'].slice(0, -9).slice(11)}
  </p>
</div>
<div className="ml-20 mt-1">
  <p className="text-[1.3rem] text-left ">{nextStopStatus[closestStopIndex]}</p>
  <p className="mt-1 text-[3.5rem] font-bold ">{closestStopName.replace(/, München/g, '')}</p>
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
    ? stopover.plannedDeparture.slice(11, 16)
    : stopover.plannedArrival.slice(11, 16)
}
</p>
            </div>
            <div className="ml-[7.6rem] mt-3.5">
            <p className={`text-${stopover.arrivalDelay > 300 ? 'red-500' : 'green-600'} text-[2.6rem]`}>
  {stopover && typeof stopover.departure === 'string'
    ? stopover.departure.slice(11, 16)
    : stopover.arrival.slice(11, 16)}
</p>

            </div>
            <div className="ml-[6.2rem] mt-3.5">
              <p className="text-[2.5rem] ">{stopover.stop.name.replace(/München-/g, "").split("Gl.")[0].trim().replace(/, München/g, '')}</p>
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
  const url =  "https://" + process.env.API_INSTANCE + "/trips/" + tripId;
  const response = await fetch(url);
  const data = await response.json();
  // Assuming 'data' is your JSON object

  const departures = data; // assuming the JSON data is structured as you provided
  var Destination = data.trip.destination.name.replace(/München-/g, "").split("Gl.")[0].trim() || 'München Hbf'
  var Line = data.trip.line.name.replace("BRB","") || "Leberkas-Express"
  const stopovers = data.trip.stopovers; // get the next 5 stops including the current one

  const currentTime = new Date(); // get the current time on the server

  const closestStopIndex = stopovers.findIndex(stopover => {
    const departureTime = new Date(stopover.departure);
    return departureTime > currentTime;
  });
  const nextStopStatus = stopovers.map(stopover => {
    const arrivalTime = new Date(stopover.arrival);
    const departureTime = new Date(stopover.departure);
    if (currentTime < arrivalTime) {
      return 'Nächster Halt';
    } else if (currentTime >= arrivalTime && currentTime < departureTime) {
      return 'Abfahrt von';
    } else {
      return 'Abgefahren';
    }


  });

  console.log(data)
  return {
    props: {
      Destination,
      Line,
      closestStopIndex,
      stopovers,
      nextStopStatus 
    },
  };
}
