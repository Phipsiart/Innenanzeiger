import Header from '../../../components/Header';
import TrainMap from '../../../components/core/TrainMap';
export default async function TrackTrain({ params }) {
  const tripId = decodeURIComponent(params.slug);
  console.log(tripId);
  return (
    <>
      <Header />
      <TrainMap tripId={tripId} />
    </>
  );
}
