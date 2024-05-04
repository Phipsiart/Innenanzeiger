import ReplaceNames from '../lib/filter/ReplaceNames';
import FormatDate from '../lib/filter/FormatDate';
export default async function GetConnetions(from, to, departure) {
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
    let operator = '';
    let redirectlink = '';
    const leg = journey.legs[0];
    const destination = ReplaceNames(leg.destination.name);
    const plannedDeparture = FormatDate(leg.plannedDeparture);
    const line = ReplaceNames(leg.line.name);
    //if the leg.line.operator doesnt exist, read the product name instead for example "subway"
    if (leg.line.operator != undefined) {
      operator = leg.line.operator.id;
    }
    if (leg.line.operator == undefined) {
      operator = leg.line.product;
    }
    redirectlink = '/departures?tripId=' + leg.tripId;
    if (operator == 'db-regio-ag-s-bahn-munchen') {
      redirectlink = '/departures/sbahn-muc?tripId=' + leg.tripId;
    }
    const delay =
      leg.departureDelay !== undefined && leg.departureDelay >= 60
        ? leg.departureDelay / 60 === 1
          ? '1 minute'
          : `${Math.floor(leg.departureDelay / 60)} minutes`
        : 'on time';
    // Assuming you want the first leg of each journey
    return {
      line: line,
      destination: destination,
      plannedDeparture: plannedDeparture,
      delay: delay,
      redirectto: redirectlink,
    };
  });
  return data;
}
