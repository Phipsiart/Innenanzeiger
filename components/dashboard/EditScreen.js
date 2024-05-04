import { screenTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { and } from 'drizzle-orm';
import db from '@/lib/db';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
export default async function EditScreen({ user }) {
  // display only the current screen from the screen table from the database where the screenid and the userid match
  const fetchdata = await db
    .select()
    .from(screenTable)
    .where(and(eq(screenTable.screenid, 'ccc084bdec8b649fa0ccd0d0129a9cdf'), eq(screenTable.belongsto, user?.id)));

  const data = fetchdata;
  console.log(data);
  return (
    <>
      <h3 className="text-center mt-12 text-3xl font-bold debug">Your screens.</h3>
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
                    <span>RB54 to München Hbf</span>
                    <span className="font-medium">Status</span>
                    <span>Final stop reached.</span>
                    <span className="font-medium">TripId</span>
                    <span className="bg-gray-200  pt-[0.2rem] w-[12rem] rounded h-7 text-[1rem] pl-[0.4rem]">
                      {screen.tripId}
                    </span>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <span className="font-medium">Screen Type</span>
                    <p>
                      {screen.typeofscreen
                        .replace('sbahn-muc', 'S-Bahn München')
                        .replace('ubahn-muc', 'U-Bahn München')
                        .replace('default', 'Bayerische Oberlandbahn')}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex">
                <Link
                  href={`/dashboard/screen?action=edit&screenId=${screen.screenid}`}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 w-full"
                >
                  Edit
                </Link>
              </CardFooter>
            </Card>{' '}
          </>
        ))}
      </div>
    </>
  );
}
