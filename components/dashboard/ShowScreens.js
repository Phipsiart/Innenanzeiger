import { screenTable } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import db from "@/lib/db"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { redirect } from "next/navigation"
export default async function ShowScreens({user}){
    const fetchdata = await db.select().from(screenTable).where(eq(screenTable.belongsto, user?.id));
    const data = fetchdata;
    console.log(data)
    return(
        <>
        <h3 className="text-center mt-12 text-3xl font-bold">Your screens.</h3>
         <div className="flex justify-center flex-wrap mt-12 space-x-4 space-y-4">
            {data.map((screen, index) => (
       <>
    <Card className="w-[350px] ml-4 mt-4 " key={`${index}${screen.screenid}`}>
      <CardHeader>
        <CardTitle>{screen.screenname}</CardTitle>
        <CardDescription>{screen.screenid}</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
             <span className="font-medium">Journey</span>
             <span>U4 to Arabellapark</span>
             <span className="font-medium">TripId</span>
             <span className="bg-gray-200  pt-[0.2rem] w-[12rem] rounded h-7 text-[1rem] pl-[0.4rem]">{screen.tripId}</span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <span className="font-medium">Screen Type</span>
              <p>{screen.typeofscreen.replace("sbahn-muc", "S-Bahn München").replace("ubahn-muc", "U-Bahn München")}</p>

            </div>
          </div>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Edit</Button>
      </CardFooter>
    </Card>       </>
    ))}
</div>
        </>
    )
}