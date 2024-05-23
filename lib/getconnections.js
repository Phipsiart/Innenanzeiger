import ReplaceNames from '../lib/filter/ReplaceNames';
import FormatDate from '../lib/filter/FormatDate';
export default async function GetConnections(from, to, departure) {
  function iso8601ToUnixTimestamp(isoString) {
    const parsedDate = new Date(isoString);
    const unixTimestamp = Math.floor(parsedDate.getTime() / 1000); // Convert milliseconds to seconds
    return unixTimestamp;
  }

  const timestamp = iso8601ToUnixTimestamp(departure);

  const APIINSTANCE = process.env.API_INSTANCE;
  const fetchfromibnrurl = `https://${APIINSTANCE}/locations?query=${from}&results=1}`;
  const processfromibnrurl = await (await fetch(fetchfromibnrurl)).json();
  const fromibnr = processfromibnrurl[0]['id'] || 8002347;
  const fetchtoibnurl = `https://${APIINSTANCE}/locations?query=${to}&results=1}`;
  const processtoibnrurl = await (await fetch(fetchtoibnurl)).json();
  const toibnr = processtoibnrurl[0]['id'] || 8002348;
  console.log(toibnr + fromibnr);
  const url = `https://${APIINSTANCE}/journeys?from=${fromibnr}&to=${toibnr}&departure=${timestamp}&results=4`;
  console.log(url);
  const response = await fetch(url);
  console.log(url);
  const apiresult = await response.json();
  const data = apiresult.journeys.map((journey) => {
    //we get the number of transfers
    const transfer = journey.legs.length - 1;
    // we need the start and endpoint of our journey as well as the time it takes
    const journeystart = ReplaceNames(journey.legs[0].origin.name);
    const plannedJourneyDeparture = FormatDate(journey.legs[0].plannedDeparture);
    const plannedJourneyArrival = FormatDate(journey.legs[journey.legs.length - 1].plannedArrival);
    const journeydestination = ReplaceNames(journey.legs[journey.legs.length - 1].destination.name);
    const legs = journey.legs.map((leg) => {
      const legId = leg.id;
      const idoftrip = leg.tripId;
      const origin = ReplaceNames(leg.origin.name);
      const destination = ReplaceNames(leg.destination.name);
      const plannedDeparture = FormatDate(leg.plannedDeparture);
      const walking = leg.walking;
      let line = '';
      if (leg.line) {
        line = ReplaceNames(leg.line.name);
      }
      const redirectlink = '/departures?tripId=' + leg.tripId;
      const delay =
        leg.departureDelay !== undefined && leg.departureDelay >= 60
          ? leg.departureDelay / 60 === 1
            ? '+1'
            : `${Math.floor(leg.departureDelay / 60)} minutes`
          : '+0';

      return {
        id: legId,
        line: line,
        origin: origin,
        tripId: idoftrip,
        destination: destination,
        walking: walking,
        plannedDeparture: plannedDeparture,
        delay: delay,
        redirectto: redirectlink,
      };
    });

    // Return the transformed journey object
    return {
      legs: legs,
      journeydata: {
        transfer: transfer,
        journeystart: journeystart,
        journeydestination: journeydestination,
        plannedJourneyDeparture: plannedJourneyDeparture,
        plannedJourneyArrival: plannedJourneyArrival,
      },
    };
  });

  return data;
}
