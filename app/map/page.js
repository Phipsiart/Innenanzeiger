import Header from '../../components/Header'
import TrainMap from '../../components/core/TrainMap'
import RefreshData from '../../components/core/RefreshData'
export default async function TrackTrain({ params, searchParams }) {
    const tripId = searchParams.tripId;
      return(
        <>
        <Header />
        <TrainMap tripId={tripId} />
        </>
    )
}