import { validateRequest } from '@/lib/auth';
import MainHeadline from '@/components/core/MainHeadline';
import { signOut } from '../../actions/auth.actions';
import { Button } from '@/components/ui/button';
import EditScreen from '@/components/dashboard/EditScreen';
import { redirect } from 'next/navigation';
import { screenTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';
import db from '@/lib/db';

export default async function DashboardScreen({ params, searchParams }) {
  const selectedscreen = searchParams.screenId;
  const { user } = await validateRequest();
  // display only the current screen from the screen table from the database where the screenid and the userid match
  const fetchdata = await db
    .select()
    .from(screenTable)
    .where(and(eq(screenTable.screenid, selectedscreen), eq(screenTable.belongsto, user?.id)));
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <>
      <form action={signOut} className="fixed z-[9999] top-1 end-3">
        <Button type="submit">Sign Out</Button>
      </form>
      <MainHeadline text="Edit Screen" />
      <EditScreen data={fetchdata} />
    </>
  );
}
