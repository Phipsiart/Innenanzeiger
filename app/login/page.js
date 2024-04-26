import MainHeadline from "../../components/core/Mainheadline";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function SignInPage(){
    return(
        <>
        <MainHeadline text="Log in"></MainHeadline>
        <p className="text-center mt-12">Log in with your account to use advanced features such as remote control of displays.</p>
        <div className="flex justify-center mt-12">
         <Input type="email" placeholder="Email" className="max-w-xs transition-all" />   
         <Button className="ml-2">Log in</Button>
                  </div>
        </>
    )
}