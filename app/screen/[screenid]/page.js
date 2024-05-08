
import BOBInnenanzeiger from "@/app/departures/BOB/BOBInnenanzeiger"
import SBahnInnenanzeiger from "@/app/departures/sbahn-muc/SBahnInnenanzeiger"
import UBahnMucInnenanzeiger from "@/app/departures/ubahn-muc/UBahnMucInnenanzeiger"
import TypeOfTransport  from '@/lib/trip/TypeOfTransport'
import db from '@/lib/db';
import { screenTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import RefreshScreenData from '@/components/core/RefreshScreenData';
export default async function Screen({ params }) {
  const selectedscreen = params.screenid;
  const screendata = await db.select({typeofscreen: screenTable.typeofscreen, tripId: screenTable.tripId}).from(screenTable).where(eq(screenTable.screenid, selectedscreen));
  var data = screendata[0]
  var tripId= screendata[0]['tripId']
  return (
    <>
    <RefreshScreenData />
    {data.typeofscreen === 'default' ? <BOBInnenanzeiger tripId={tripId} /> : null}
    {data.typeofscreen === 'sbahn-muc' ? <SBahnInnenanzeiger tripId={tripId} /> : null}
    {data.typeofscreen === 'ubahn-muc' ? <UBahnMucInnenanzeiger tripId={tripId} /> : null}

    </>
  );
}
