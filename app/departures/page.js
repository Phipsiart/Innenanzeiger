import BOBInnenanzeiger from '@/app/departures/BOB/BOBInnenanzeiger';
import SBahnInnenanzeiger from '@/app/departures/sbahn-muc/SBahnInnenanzeiger';
import UBahnMucInnenanzeiger from '@/app/departures/ubahn-muc/UBahnMucInnenanzeiger';
import TypeOfTransport from '@/lib/trip/TypeOfTransport';
export default async function DeparturePage({ params, searchParams }) {
  const tripId = searchParams.tripId;
  const typeoftransport = await TypeOfTransport(tripId);
  return (
    <>
      {typeoftransport === 'default' ? <BOBInnenanzeiger tripId={tripId} /> : null}
      {typeoftransport === 'sbahn-muc' ? <SBahnInnenanzeiger tripId={tripId} /> : null}
      {typeoftransport === 'ubahn-muc' ? <UBahnMucInnenanzeiger tripId={tripId} /> : null}
    </>
  );
}
