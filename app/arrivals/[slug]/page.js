import Header from "../../../components/Header";
import TrainCard from "../../../components/core/TrainCard"
import GetTrainDepartures from "../../../lib/GetTrainDepartures";
import GetStationByIBNR from "../../../lib/GetStationByIBNR";
import RefreshData from "../../../components/core/RefreshData"
export default async function DeparturePage({ params, searchParams }) {
    const IBNR = decodeURIComponent(params.slug); // ID aus der URL extrahieren
    const showType = searchParams.show || 'departures'; // Standardmäßig auf 'arrivals' setzen
   
    // Abrufen der Daten
    const data = await GetTrainDepartures(IBNR, showType);
    const getstation = await GetStationByIBNR(IBNR)
    return (
        <>
            <RefreshData />
            <Header activeheadline={getstation} disablelinks={true} showArrivalDepartureSwitch={true} />
            <div className="mt-[5rem]">
            <TrainCard data={data} />
            </div>
        </>
    );
}
