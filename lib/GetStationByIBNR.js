import { readStations } from 'db-stations';

export default async function getStationByIBNR(ibnr) {
    for await (const station of readStations()) {
        // Check if the station's ID matches the provided IBNR
        if (station.id === ibnr) {
            // Return the station name if a match is found
            return station.name;
        }
    }

    // If no station is found with the provided IBNR, return null or a message
    return null; // or return 'Station not found';
}
