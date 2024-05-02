import MainHeadline from "@/components/core/Mainheadline";
import { SignInForm } from "@/components/auth/SignInForm";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async  function SignInPage(){
const {user} = await validateRequest();
  if (user){
      return redirect("/dashboard")
  }
    return(
        <>
        <div className="flex h-screen">
            <div className="m-auto">
       <Card className="ml-10 mr-10">
  <CardHeader>
    <CardTitle>Sign In</CardTitle>
    <CardDescription>Sign In to your account.</CardDescription>
  </CardHeader>
  <CardContent>
<SignInForm />
  </CardContent>
  <CardFooter>
    <p className="text-gray-600">Don&apos;t have an account yet?</p>
    <Link href="/sign-up" className="ml-2 text-gray-600">Sign Up</Link>
  </CardFooter>
</Card>
</div>
</div>
        </>
    )
}