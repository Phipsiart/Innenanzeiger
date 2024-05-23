export default async function TypeOfTransport(tripId) {
  const url = 'https://' + process.env.API_INSTANCE + '/trips/' + tripId;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  let typeoftransport = 'default';
  if (
    data.trip &&
    data.trip.line &&
    data.trip.line.operator &&
    data.trip.line.operator.id == 'db-regio-ag-s-bahn-munchen'
  ) {
    typeoftransport = 'sbahn-muc';
  } else if (data.trip && data.trip.line && data.trip.line.adminCode == 'swm001') {
    typeoftransport = 'ubahn-muc';
  } else {
    typeoftransport = 'default';
  }
  return typeoftransport;
}
