import { validateRequest } from '@/lib/auth';
import MainHeadline from '@/components/core/Mainheadline';
import { signOut } from '../../actions/auth.actions';
import { Button } from '@/components/ui/button';
import EditScreen from '@/components/dashboard/EditScreen';
import { redirect } from 'next/navigation';
export default async function DashboardScreen() {
  const { user } = await validateRequest();
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <>
      <form action={signOut} className="fixed z-[9999] top-1 end-3">
        <Button type="submit">Sign Out</Button>
      </form>
      <MainHeadline text={`Dashboard`} />
      <EditScreen user={user} />
    </>
  );
}
