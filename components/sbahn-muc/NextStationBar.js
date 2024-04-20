export default function NextStationBar({nextStop, nextStopStatus, linecolor}){
    const status = nextStopStatus
    const statuseng = nextStopStatus.replace("Nächster Halt", "Next stop").replace("Abfahrt", "Departure").replace("Minuten ", "min.")
    
    return(
        <>
        <div className="bg-white fixed top-0 w-full h-[10rem] z-10 "></div>
        <div className="fixed top-2 left-[20.4rem] text-[1.5rem] z-20 "> 
        <span>{status}</span>
        <span className="text-gray-500 italic ml-3">{statuseng}</span>
        </div>
        <div className="flex fixed top-2 left-5 z-30">
            <span className="text-[2.5rem] mt-14"><div>
                {/* If the arrival isn't defined, render the departure time instead*/}
    {nextStop.plannedArrival !== "n/a" ? nextStop.plannedDeparture : nextStop.plannedDeparture}
</div>
</span>
            <svg className="fixed z-20 left-[6rem] top-[3rem]" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="12" cx="50" cy="50" fill={linecolor} />            
             </svg>
             <svg height="112" width="200" className="fixed top-[3rem] left-[2.9rem]">
      <line x1="100" y1="66" x2="100" y2="200" stroke={linecolor} strokeWidth="5" />
    </svg>     
               <span className="text-[2.5rem] fixed top-[4.2rem] left-[10.8rem]">{nextStop.arrivalDelay === 0 || nextStop.arrivalDelay === null ? "+0" : `+${Math.floor(nextStop.arrivalDelay / 60)}`}</span>
            <span className="fixed  left-[19.0rem] text-[5rem]  m-5">{nextStop.name}</span>
        </div>
        </>
    )
}
