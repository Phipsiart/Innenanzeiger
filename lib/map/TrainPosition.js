export default async function TrainPosition(tripId) {
  const API_INSTANCE = process.env.API_INSTANCE;
  
  const encodedTripId = encodeURIComponent(tripId); // Encodiert die TripId

  try {

    const fetchdata = await fetch(`https://${API_INSTANCE}/trips/${encodedTripId}`, {
      headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0'
      }
  });   
   const data = await fetchdata.json();
    
    const origin = data.trip.origin.name;
    const destination = data.trip.destination.name;
    const line = data.trip.line;
    const currentLocation = data.trip.currentLocation;

    return {
      origin,
      destination,
      line,
      currentLocation,
    };
  } catch (error) {
    console.error('Fehler beim Holen der Zugdaten:', error);
    throw new Error('Could not fetch train position data');
  }
}
