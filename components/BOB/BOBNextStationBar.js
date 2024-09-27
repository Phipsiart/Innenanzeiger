export default function BOBNextStationBar({data, closestStop, closeststopname, nextStopStatus}){
    return(
        <>
        <div className="flex text-[#2c4958] top-[15.3rem] fixed left-32 text-[1.3rem]">
         <p className="fixed ml-2.5">Plan</p>
         <p className="fixed left-[22.6rem]">Aktuell</p>
         <p className="text-left fixed left-[32.2rem]">
         {data.closestStopIndex === -1 ? 'Endstation' : nextStopStatus[data.closestStopIndex]}

         </p>
        </div>
        <svg className="fixed  top-[15.2rem] left-[14.65rem]">
            <rect width={20} height={20} x={30} y={79} fill="#2c4958" />
            </svg>
            {/*If we only have one stop left, dont render the line to the next stations*/}
            {data.stopsleft === 0 ? <svg className="fixed top-[15.2rem] left-[14.62rem]"><line x1="40" y1="60" x2="40" y2="80" stroke="#2c4958" strokeWidth="2"></line></svg>:             
            <svg className="fixed top-[21.4rem] left-[14.62rem] z-[9999]">
            <line x1={40} y1={0} x2={40} y2={94} stroke="#2c4958" strokeWidth={2} />
            </svg>
                }
        <div className="flex text-[#2c4958] top-[18.1rem] text-[3.5rem] font-bold fixed">
        <p className="fixed left-[4.9rem]">
        {data.closestStopIndex === -1
                ? data.stopovers[data.totalstops - 1].plannedArrival
                : closestStop.plannedDeparture}
        </p>
        <p className={`${closestStop['arrivalDelay'] > 300 ? 'delay' : 'ontime'} fixed left-[19.8rem]`}>
            {data.closestStopIndex === -1 ? data.stopovers[data.totalstops - 1].arrival : closestStop.departure}
        </p>
        <p className=" fixed left-[32.2rem]">{closeststopname}</p>
        </div>
        </>
    )
}