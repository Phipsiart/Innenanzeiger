export default async function TypeOfTransport(tripId) {
  let typeoftransport = '';
  let errorstring = '';
  let idontknowwhatiamdoing = '';

  try {
    const url = 'https://' + process.env.API_INSTANCE + '/trips/' + encodeURIComponent(tripId);
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    if (data.trip && data.trip.line && data.trip.line.operator) {
      if (data.trip.line.operator.id === 'db-regio-ag-s-bahn-munchen') {
        typeoftransport = 'sbahn-muc';
      } else if (data.trip.line.operator.id === 'db-fernverkehr-ag') {
        typeoftransport = 'ICE';
      } else if (data.trip.line.product === 'subway' && data.trip.line.adminCode === 'swm001') {
        typeoftransport = 'ubahn-muc';
      } 
    } else {
      typeoftransport = 'default';
    }
      if (data.trip.line.product === 'subway' && data.trip.line.adminCode === 'swm001') {
        typeoftransport = 'ubahn-muc';
      } 

    console.log("Success, train type is " + typeoftransport);
  } catch (error) {
    console.warn("Error when determining the train type:", error);
    typeoftransport = 'error-occured';
    errorstring = error.toString();
  }

  return {
    typeoftransport,
    errorstring,
    idontknowwhatiamdoing
  };
}
