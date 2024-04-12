import ReplaceNames from "../filter/ReplaceNames";
import FormatDate from "../filter/FormatDate";
export async function Innenanzeiger(tripId) {
    const url =  "https://" + process.env.API_INSTANCE + "/trips/" + tripId;
    console.log(url)
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    var Destination = ReplaceNames(data.trip.destination.name)  || "Bad Leberkas"
    var Line = data.trip.line.name.replace("BRB","") || "Leberkas-Express"
    const originalstopovers = data.trip.stopovers
    const stopovers = data.trip.stopovers.map(stopover => {
      let plannedDeparture = FormatDate(stopover.plannedDeparture)
      const departure = FormatDate(stopover.departure)
      const arrival = FormatDate(stopover.arrival)
      const plannedArrival = FormatDate(stopover.plannedArrival)
      const stationname = ReplaceNames(stopover.stop.name)
  
      // If plannedDeparture is null, assign it the value of plannedArrival
      if (plannedDeparture =="n/a") {
          plannedDeparture = plannedArrival;
      }
      return {
          name: stationname,
          arrival: arrival,
          plannedArrival : plannedArrival,
          arrivalDelay: stopover.arrivalDelay,
          plannedArrivalPlatform: stopover.plannedArrivalPlatform,
          arrivalPlatform: stopover.arrivalPlatform,
          departurePlatform: stopover.departurePlatform,
          plannedDeparturePlatform: stopover.plannedDeparturePlatform,
          departure: departure,
          plannedDeparture: plannedDeparture,
      };
  });
        ; // get the next 5 stops including the current one
  
      const currentTime = new Date();
      const dateoptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
      const currentDate = currentTime.toLocaleDateString("de-DE", dateoptions);

          const closestStopIndex = originalstopovers.findIndex(stopover => {
      const departureTime = new Date(stopover.departure);
      return departureTime > currentTime;
    });
    let stopsleft = 0;
        if (closestStopIndex !== -1) {
            stopsleft = originalstopovers.length - closestStopIndex - 1;
        }
    const totalstops = originalstopovers.length 
    const nextStopStatus = originalstopovers.map(stopover => {
      const arrivalTime = new Date(stopover.arrival);
      const departureTime = new Date(stopover.departure);
      const twoMinutesFromNow = new Date(currentTime.getTime() + 2*60*1000); // currentTime plus 2 minutes
      
      if (currentTime < arrivalTime && arrivalTime <= twoMinutesFromNow) {
        return 'In Kürze erreichen wir';
      } else if (currentTime < arrivalTime) {
        return 'Nächster Halt';
      } else if (currentTime >= arrivalTime && currentTime < departureTime) {
        return 'Abfahrt aus';
      } else {
        return 'Abgefahren';
      }
        
  
    });
  
    return {
        Destination,
        currentDate,
        Line,
        stopsleft,
        closestStopIndex,
        totalstops,
        stopovers,
        nextStopStatus 
    };
  }
  