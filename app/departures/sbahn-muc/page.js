import { Innenanzeiger } from "../../../lib/departures/Innenanzeiger";
import RefreshData from "../../../components/core/RefreshData";
import BottomBar from "@/components/sbahn-muc/BottomBar";
import BackgroundWrapper from "@/components/sbahn-muc/BackgroundWrapper"
import NextStationBar from "@/components/sbahn-muc/NextStationBar"
export default async function SBahnInnenanzeiger({params, searchParams}){
    const data = await Innenanzeiger(searchParams.tripId)
    // an easy way to set the colors for the lines accordingly.
    //themeconfig is a string that supplies the color to the components
    //so that they can be themed accordingly for their line,
    //for instance "#008a51" is the Line S6
    let themeconfig = "";
    if(data.Line =="S1"){
      themeconfig ="#0ec1ea"
    }
    if(data.Line =="S2"){
      themeconfig ="#72c042"
    }
    if (data.Line =="S3"){
      themeconfig ="#7c087e"
    }
    if (data.Line =="S4"){
      themeconfig ="#ef1620"
    }
    if (data.Line =="S6"){
      themeconfig = "#008a51"
    }
    if (data.Line =="S7"){
      themeconfig ="#973530"
    }
    if(data.Line =="S8"){
      themeconfig = "#ffcb06"
    }
    if(data.Line =="S20"){
      themeconfig ="#f05a74"
    }
    const stopovers = data.stopovers;
    var nextStops = stopovers.slice(data.closestStopIndex + 1, data.closestStopIndex + 22) || "Bad Leberkas";
    const tripId= searchParams.tripId;  
    return(
        <>
        <div className="__screen overflow-hidden">
        <RefreshData />
        <BackgroundWrapper />
        <NextStationBar linecolor={themeconfig} closestStopIndex={data.closestStopIndex} nextStop={data.stopovers[data.closestStopIndex]} nextStopStatus={data.nextStopStatus[data.closestStopIndex]} />
    <div className="mb-[10rem]"></div>
    <div className="animate-scroll">
    {data.closestStopIndex !== -1 && nextStops.map((stopover, index) => (
  <div key={index} className="flex text-[2.5rem] ">
      {/*fix the vertical line for the */}
           {index ===0 && (
      <>
      
        <svg height="42" width="200" className="fixed  left-[2.9rem]">
          <line x1="100" y1="0" x2="100" y2="200" stroke={themeconfig} strokeWidth="5" />
        </svg>     
      </>
    )}
    <div className="mt-5 mb-4">
      <p className="ml-[1.3rem]">{
        (index === 0)
          ? stopover.plannedArrival
          : (stopover && typeof stopover.plannedArrival === 'string')
            ? stopover.plannedDeparture
            : stopover.plannedArrival
      }
      </p>
    </div>
    {/*SVG lines Start */}
    <svg className="fixed left-[7.24rem] mt-[1.5rem]" height="100" width="50" xmlns="http://www.w3.org/2000/svg">
          <circle r="9"  cx="30" cy="30" fill="transparent"  stroke={themeconfig} strokeWidth="3" />      
        </svg>
 

    {index !== nextStops.length - 1 && (
      <>
        <svg height="140" width="200" className="fixed  left-[2.9rem]">
          <line x1="100" y1="66" x2="100" y2="200" stroke={themeconfig} strokeWidth="5" />
        </svg>     
      </>
    )}
    <div className=" mt-5 ml-[3.4rem]">
      <p> +{stopover.arrivalDelay / 60}</p>
    </div>
    <div className="mt-5 ml-[6.9rem]">
      <p>{stopover.name}</p>
    </div>
  </div>
))}   
</div>

     <BottomBar linecolor={themeconfig} line={data.Line} destination={data.Destination} />
        </div>
        </>
    )
}