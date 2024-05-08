import db from '@/lib/db';
import { screenTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
export default async function Screen({ params }) {
  const selectedscreen = params.screenid;
  const screendata = await db.select({typeofscreen: screenTable.typeofscreen, tripId: screenTable.tripId}).from(screenTable).where(eq(screenTable.screenid, selectedscreen));
  console.log(screendata);
  return (
    <>
    </>
  );
}
