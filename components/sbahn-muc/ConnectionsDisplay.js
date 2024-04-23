import ReplaceNames from "@/lib/filter/ReplaceNames"
import FormatDate from "@/lib/filter/FormatDate"
import Image from "next/image"
export default async function ConnectionsDisplay({ibnr}){
    const API_INSTANCE = process.env.API_INSTANCE
    const fetchdata = await fetch(`https://${API_INSTANCE}/stops/${ibnr}/departures?results=5&taxi?false&duration=12800`)
    const data = await fetchdata.json()
   return(
    <>
    <div className="fixed top-0 left-0 right-0 bottom-[7rem] mt-[10rem] bg-gray-200 z-[100]">
        {/*Top bar start*/}
        <div className="fixed flex top-[11rem] z-[100] left-1 ">
        <p className="text-[1.6rem] ml-4">Anschlüsse</p>
        <p className="text-[1.6rem]  text-gray-500 italic ml-4">Connections</p>
    </div>
    </div>
    <div className="fixed top-[11rem] z-[100] right-1 ">
        <div className="flex">
    <p className="text-[1.6rem] mr-4 ">Abfahrt</p>
        <p className="text-[1.6rem] text-gray-500 italic mr-12">Departure</p>
    </div>
    {/*Top bar end*/}
<div className="fixed top-[14rem] z-[100] left-4">
    {data.departures.map((connection) => (
        <>
        <div className="flex mt-3" key={connection.tripId}>
        <Image class="fixed " src={`/transportation-types/${connection.line.productName}.svg`} height="55" width="55" alt={`${connection.line.productName} Logo (illustarational)`}></Image> 
        <span className="text-[2rem] ml-[5rem] mt-2">{connection.line.name.replace("STR", "").replace("BusSEV", "").replace("Bus", "")}</span>
       <span className="fixed left-56 text-[2rem] ml-4 mt-2">{ReplaceNames(connection.destination.name)}</span>
       <span className="fixed right-[11.5rem] text-[2rem] ml-4 mt-2">{FormatDate(connection.plannedWhen)}</span>
       <span className="fixed right-[2rem] text-[2rem] ml-4 mt-2">{"+ " + connection.delay /60 + " min"}</span>
       </div>
       <div className="border-gray-300 w-[1222rem] border-t mt-1"></div>
   </>
    ))}
    </div>
    </div>
    </>
   )
}
