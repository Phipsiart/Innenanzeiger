//Innenanzeiger 
// Copyright 2024 Phipiart & Contributors.

//This is where all the Magic happens.
//we call the API to receive the Data that is assigned to the tripId.

import ReplaceNames from "../filter/ReplaceNames";
import FormatDate from "../filter/FormatDate";
export async function Innenanzeiger(tripId) {
    let operator ="";
    const url =  "https://" + process.env.API_INSTANCE + "/trips/" + tripId;
    const response = await fetch(url);
    const data = await response.json();
    var Destination = ReplaceNames(data.trip.destination.name)  || "Bad Leberkas"
    var Line = data.trip.line.name.replace("BRB","").replace(/ /g,'') || "Leberkas-Express"
    operator = data.trip.line.operator.id || "none"
    const originalstopovers = data.trip.stopovers
    const stopovers = data.trip.stopovers.map(stopover => {
      let plannedDeparture = FormatDate(stopover.plannedDeparture)
      const departure = FormatDate(stopover.departure)
      const arrival = FormatDate(stopover.arrival)
      const plannedArrival = FormatDate(stopover.plannedArrival)
      const stationname = ReplaceNames(stopover.stop.name)
      // If plannedDeparture is null or n/a, assign it the value of plannedArrival
      if (plannedDeparture =="n/a") {
          plannedDeparture = plannedArrival;
      }
      if (plannedArrival == null){
        plannedDeparture = plannedArrival
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
      // get the next 5 stops including the current one
  
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
    //get the next stops
    const totalstops = originalstopovers.length 
    const nextStopStatus = originalstopovers.map(stopover => {
      const arrivalTime = new Date(stopover.arrival);
      const departureTime = new Date(stopover.departure);
      const twoMinutesFromNow = new Date(currentTime.getTime() + 2*60*1000); // currentTime plus 2 minutes

          if (operator ==="bayerische-regiobahn"){
                if (currentTime < arrivalTime && arrivalTime <= twoMinutesFromNow) {
                  return 'In Kürze erreichen wir';
                } else if (currentTime < arrivalTime) {
                  return 'Nächster Halt';
                } else if (currentTime >= arrivalTime && currentTime < departureTime) {
                  return 'Abfahrt aus';
                } else {
                  return 'Abgefahren';
                }
          }

          else if(operator ==="db-regio-ag-s-bahn-munchen"){
               if (currentTime < arrivalTime) {
                return 'Nächster Halt';
              } 
              else if (currentTime >= arrivalTime && currentTime < departureTime) {
                // Berechnen Sie die Differenz in Minuten
                let diffInMinutes = Math.round((departureTime - currentTime) / 60000); // 60000 Millisekunden entsprechen 1 Minute
                if (diffInMinutes <= 1) {
                  return 'Abfahrt';
                } else {
                  return 'Abfahrt in ' + diffInMinutes + ' min.';
                }
              } 
              else {
                return 'Abgefahren';
              }
            
          }
            else{
              if (currentTime < arrivalTime && arrivalTime <= twoMinutesFromNow) {
                return 'In Kürze erreichen wir';
              } 
                else if (currentTime < arrivalTime) {
                return 'Nächster Halt';
              } else if (currentTime >= arrivalTime && currentTime < departureTime) {
                return 'Abfahrt aus';
              } else {
                return 'Abgefahren';
              }
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
  