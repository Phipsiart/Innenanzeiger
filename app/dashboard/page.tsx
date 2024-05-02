import { validateRequest } from "@/lib/auth"
import Link from "next/link"
import MainHeadline from "@/components/core/Mainheadline"
import { signOut } from "../actions/auth.actions"
import { Button } from "@/components/ui/button"
import ShowScreens from "@/components/dashboard/ShowScreens"
export  default async  function DashboardHomePage(){
    const {user} = await validateRequest()
    if (!user){
        return(
            <>
            <MainHeadline text="Sign In"></MainHeadline>
            <p className="text-center mt-12">Please Sign In to continue.</p>
            <div className="flex justify-center">
            <Link href="/sign-in" className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2">Continue</Link>
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
            <ShowScreens user={user} />
        </>
    )
}