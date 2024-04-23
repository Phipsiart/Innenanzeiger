import Image from "next/image"
import AvailableTypesofConnections from "@/components/ubahn-muc/AvailableTypesofConnections"
export default function DepartureCard({nextstop, stopover, closestStopIndex}){
    return(
        <>
         {/*Top bar connection start */}
         <div className="top-[9.3rem] fixed left-[16.8rem] mt-[1rem]">
            {stopover.slice(closestStopIndex).map((stop) => (
    <div className="flex" key={stop.tripId}>
        <div className="fixed left-3 mt-5">
            <AvailableTypesofConnections key={Math.random()} products={stop.typeofconnections} />
        </div>
        <span className="text-[3.6rem] mt-1">{stop.name}</span>
        <span className="fixed right-9 text-[2.5rem] mt-4">{stop.arrival}</span>
    </div>
))}
         </div>
        </>
    )
}