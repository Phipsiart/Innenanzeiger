export default async function TrainPosition(tripId){
    const API_INSTANCE = process.env.API_INSTANCE;

    const fetchdata = await fetch(`https://transport.phipsiart.de/trips/${tripId}`, {
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
        currentLocation
    };
}
