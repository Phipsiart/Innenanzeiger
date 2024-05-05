import { validateRequest } from '@/lib/auth';
import Link from 'next/link';
import MainHeadline from '@/components/core/MainHeadline';
import { signOut } from '../actions/auth.actions';
import { Button } from '@/components/ui/button';
import ShowScreens from '@/components/dashboard/ShowScreens';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
export default async function DashboardHomePage() {
  const { user } = await validateRequest();
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <>
      <Header />
      <form action={signOut} className="fixed z-[9999] top-1 end-3">
        <Button type="submit">Sign Out</Button>
      </form>
      <MainHeadline text={`Dashboard`} />
      <ShowScreens user={user} />
    </>
  );
}
