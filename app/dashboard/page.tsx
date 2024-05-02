import { validateRequest } from "@/lib/auth"
import Link from "next/link"
import MainHeadline from "@/components/core/Mainheadline"
import { signOut } from "../actions/auth.actions"
import { Button } from "@/components/ui/button"
export  default async  function DashboardHomePage(){

    const {user} = await validateRequest()

    if (!user){
        return(
            <>
            <MainHeadline text="Sign In"></MainHeadline>
            <p className="text-center mt-12">Please Sign In to continue.</p>
            <div className="flex justify-center">
            <Link href="/sign-in" className="p-3 mt-4 bg-black text-white rounded">Continue</Link>
            </div>
            </>
        )
    }
    return(
        <>
        <form action={signOut} className="fixed top-2 end-2">
            <Button type="submit">Sign Out</Button>
        </form>
        <MainHeadline text="Innenanzeiger Cloud" />
        {JSON.stringify(user)}
        </>
    )
}