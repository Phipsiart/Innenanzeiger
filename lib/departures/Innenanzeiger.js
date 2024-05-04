//Innenanzeiger
// Copyright 2024 Phipiart & Contributors.

//This is where all the Magic happens.
//we call the API to receive the Data that is assigned to the tripId.

import ReplaceNames from '../filter/ReplaceNames';
import FormatDate from '../filter/FormatDate';
export async function Innenanzeiger(tripId) {
  let operator = '';
  //time in hour:minute
  const kasDate = new Date();
  let kasHours = kasDate.getHours();
  let kasMinutes = kasDate.getMinutes();
  kasMinutes = kasMinutes < 10 ? '0' + kasMinutes : kasMinutes;
  const RenderCurrentTime = kasHours + ':' + kasMinutes;
  const url = 'https://' + process.env.API_INSTANCE + '/trips/' + tripId;
  const response = await fetch(url);
  const data = await response.json();
  var Destination = ReplaceNames(data.trip.destination.name) || 'Bad Leberkas';
  var Line = data.trip.line.name.replace('BRB', '').replace(/ /g, '') || 'Leberkas-Express';
  //if the leg.line.operator doesnt exist, read the product name instead for example "subway"
  if (data.trip.line.operator != undefined) {
    operator = data.trip.line.operator.id;
  }
  if (data.trip.line.operator == undefined) {
    operator = data.trip.line.product;
  }
  const originalstopovers = data.trip.stopovers;
  const stopovers = data.trip.stopovers.map((stopover) => {
    let plannedDeparture = FormatDate(stopover.plannedDeparture);
    const departure = FormatDate(stopover.departure);
    const arrival = FormatDate(stopover.arrival);
    const plannedArrival = FormatDate(stopover.plannedArrival);
    const stationname = ReplaceNames(stopover.stop.name);
    // If plannedDeparture is null or n/a, assign it the value of plannedArrival
    if (plannedDeparture == 'n/a') {
      plannedDeparture = plannedArrival;
    }
    if (plannedArrival == null) {
      plannedDeparture = plannedArrival;
    }
    return {
      name: stationname,
      arrival: arrival,
      plannedArrival: plannedArrival,
      arrivalDelay: stopover.arrivalDelay,
      plannedArrivalPlatform: stopover.plannedArrivalPlatform,
      arrivalPlatform: stopover.arrivalPlatform,
      departurePlatform: stopover.departurePlatform,
      IBNR: stopover.stop.id,
      plannedDeparturePlatform: stopover.plannedDeparturePlatform,
      departure: departure,
      plannedDeparture: plannedDeparture,
      typeofconnections: stopover.stop.products,
    };
  });
  // get the next 5 stops including the current one
  const currentTime = new Date();
  const dateoptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const currentDate = currentTime.toLocaleDateString('de-DE', dateoptions);

  const closestStopIndex = originalstopovers.findIndex((stopover) => {
    const departureTime = new Date(stopover.departure);
    return departureTime > currentTime;
  });
  let stopsleft = 0;
  if (closestStopIndex !== -1) {
    stopsleft = originalstopovers.length - closestStopIndex - 1;
  }
  //get the next stops
  const totalstops = originalstopovers.length;
  const nextStopStatus = originalstopovers.map((stopover) => {
    const arrivalTime = new Date(stopover.arrival);
    const departureTime = new Date(stopover.departure);
    const twoMinutesFromNow = new Date(currentTime.getTime() + 2 * 60 * 1000); // currentTime plus 2 minutes

    if (operator === 'bayerische-regiobahn') {
      if (currentTime < arrivalTime && arrivalTime <= twoMinutesFromNow) {
        return 'In Kürze erreichen wir';
      } else if (currentTime < arrivalTime) {
        return 'Nächster Halt';
      } else if (currentTime >= arrivalTime && currentTime < departureTime) {
        return 'Abfahrt aus';
      } else {
        return 'Abgefahren';
      }
    } else if (operator === 'db-regio-ag-s-bahn-munchen') {
      if (currentTime < arrivalTime) {
        return 'Nächster Halt';
      } else if (currentTime >= arrivalTime && currentTime < departureTime) {
        // Berechnen Sie die Differenz in Minuten
        let diffInMinutes = Math.round((departureTime - currentTime) / 60000); // 60000 Millisekunden entsprechen 1 Minute
        if (diffInMinutes <= 1) {
          return 'Abfahrt';
        } else {
          return 'Abfahrt in ' + diffInMinutes + ' min.';
        }
      } else {
        return 'Abgefahren';
      }
    } else {
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
  });
  //get the next Stop (that can be rendered at the top of the page)

  let closestStopover;
  if (closestStopIndex !== -1) {
    closestStopover = stopovers[closestStopIndex];
  } else {
    closestStopover = stopovers[stopovers.length - 1];
  }
  //get the closetStop status (that can be rendeed at the top of the page)
  let closestStopStatus;
  if (closestStopIndex !== -1) {
    closestStopover = stopovers[closestStopIndex];
    closestStopStatus = nextStopStatus[closestStopIndex];
  } else {
    closestStopover = stopovers[stopovers.length - 1];
    closestStopStatus = nextStopStatus[nextStopStatus.length - 1];
  }
  //Look up if the stop is 1 minute or less away.
  let renderconnections = false;
  const [e5f6a7b8, c9d0e1f2] = closestStopover.arrival.split(':').map(Number);

  const o1p2q3r4 = new Date();
  o1p2q3r4.setHours(e5f6a7b8, c9d0e1f2, 0);

  const s5t6u7v8 = new Date();

  // Calculate the difference in minutes
  const w9x0y1z2 = (o1p2q3r4 - s5t6u7v8) / 1000 / 60;

  if (w9x0y1z2 > 0 && w9x0y1z2 < 1) {
    renderconnections = true;
  } else if (w9x0y1z2 === 0) {
    renderconnections = false;
  }

  return {
    Destination,
    currentDate,
    Line,
    stopsleft,
    closestStopIndex,
    totalstops,
    stopovers,
    nextStopStatus,
    nextstop: closestStopover,
    closestStopStatus,
    renderconnections,
    RenderCurrentTime,
  };
}
