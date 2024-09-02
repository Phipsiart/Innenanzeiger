import BOBInnenanzeiger from '@/app/departures/BOB/BOBInnenanzeiger';
import SBahnInnenanzeiger from '@/app/departures/sbahn-muc/SBahnInnenanzeiger';
import UBahnMucInnenanzeiger from '@/app/departures/ubahn-muc/UBahnMucInnenanzeiger';
import ICEInnenanzeiger from '@/app/departures/ICE/ICEInnenanzeiger';
import TypeOfTransport from '@/lib/trip/TypeOfTransport';
import Header from '@/components/Header';
import MainHeadline from '@/components/core/MainHeadline';
export default async function DeparturePage({ params }) {
  console.log(params);
  const tripId = decodeURIComponent(params.slug);
  const data = await TypeOfTransport(tripId);
  return (
    <>
      {data.typeoftransport === 'default' ? <BOBInnenanzeiger tripId={tripId} /> : null}
      {data.typeoftransport === 'sbahn-muc' ? <SBahnInnenanzeiger tripId={tripId} /> : null}
      {data.typeoftransport === 'ubahn-muc' ? <UBahnMucInnenanzeiger tripId={tripId} /> : null}
      {data.typeoftransport === 'ICE' ? <ICEInnenanzeiger tripId={tripId} /> : null}
      {data.typeoftransport === 'error-occured' ? (
        <>
          <Header />
          <MainHeadline text="Error occoured" />
          <p className="text-center mt-8">We are sorry, an unexpected error occoured.</p>
          <div className="flex justify-center mt-4">
            <code className="bg-gray-200 p-1.5 rounded">{data.errorstring}</code>
          </div>
          <p className="text-center">Please try again later.</p>
        </>
      ) : null}
    </>
  );
}
