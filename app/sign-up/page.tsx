import { SignUpForm } from '@/components/auth/SignUpForm';
import Header from '@/components/Header';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignUpPage() {
  const { user } = await validateRequest();
  if (user) {
    return redirect('/dashboard');
  }
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="m-auto">
          <Card className="ml-10 mr-10">
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create an Account to access more features</CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm />
            </CardContent>
            <CardFooter>
              <p className="text-gray-600">Already have an account?</p>
              <Link href="/sign-in" className="ml-2 text-gray-600">
                Sign In
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
