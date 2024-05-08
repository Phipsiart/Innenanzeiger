import TopBar from '@/components/ubahn-muc/TopBar';
import DepartureCard from '@/components/ubahn-muc/DepartureCard';
import BackgroundWrapper from '@/components/sbahn-muc/BackgroundWrapper';
import NextStopScreen from '@/components/ubahn-muc/NextStopScreen';
import { Innenanzeiger } from '@/lib/departures/Innenanzeiger';
import RefreshData from '@/components/core/RefreshData';
export default async function UBahnMucInnenanzeiger({ tripId }) {
  const data = await Innenanzeiger(tripId);
  return (
    <>
      <RefreshData />
      <TopBar
        line={data.Line}
        nextStopStatus={data.nextStopStatus}
        closestStopIndex={data.closestStopIndex}
        RenderCurrentTime={data.RenderCurrentTime}
      />
      <DepartureCard
        nextstop={data.nextstop}
        stopover={data.stopovers}
        nextStopStatus={data.closestStopStatus}
        closestStopIndex={data.closestStopIndex}
      />
      {data.renderconnections && <NextStopScreen nextstop={data.nextstop} />}
      <BackgroundWrapper />
    </>
  );
}
