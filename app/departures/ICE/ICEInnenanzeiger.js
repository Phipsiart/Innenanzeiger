import { Innenanzeiger } from '@/lib/departures/Innenanzeiger';
import ICETopBar from '@/components/ICE/ICETopBar'
import ICENextStopCard from '@/components/ICE/ICENextStopCard'
import RefreshData from '@/components/core/RefreshData';
import TrainMap from '@/components/core/TrainMap';
import Image from 'next/image';
export default async function ICEInnenanzeiger({ tripId }) {
  const data = await Innenanzeiger(tripId);
  const stopovers = data.stopovers;
  var nextStops = stopovers.slice(data.closestStopIndex + 1, data.closestStopIndex + 22) || 0;
  return (
    <>
    <RefreshData />
    <ICETopBar currentTime={data.RenderCurrentTime} Line={data.Line} />
    <ICENextStopCard nextStop={data.nextstop} />
    {data.renderconnections ? null: <TrainMap tripId={tripId} /> }
    </>

  );
}
