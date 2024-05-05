//@ts-nocheck
'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
export default function EditScreen({ data }) {
  let screenNameHeadline = '';
  let result: any = [];
  if (data != '[]') {
    screenNameHeadline = data[0]['screenname'];
    var screentypeok = data[0]['typeofscreen'];
    result = data;
  }
  // display only the current screen from the screen table from the database where the screenid and the userid match
  return (
    <>
      <h3 className="text-center mt-12 text-3xl font-bold text-gray-800">{screenNameHeadline}</h3>
      <div className="flex justify-center flex-wrap mt-12 space-x-4 space-y-4">
        {result.map((screen, index) => (
          <>
            <div key={`${screen.screenid}${screen.typeofscreen}`}>
              <Card className="w-[350px] ml-4 mt-4 ">
                <CardHeader>
                  <CardTitle>
                    <Label>Screen Name</Label>
                    <Input className="mt-4" title="Phipsiart" defaultValue={screen.screenname} />
                  </CardTitle>
                  <CardDescription>{screen.screenid}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <span className="font-medium">Journey</span>
                      <div className="flex">
                        {/*<span className='bg-gray-600 rounded p-0.5 text-white'>RB54</span>*/}
                      </div>
                      <span className="font-medium">Status</span>
                      <span>Departure from Grafing Bahnhof</span>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <span className="font-medium">Screen Type</span>
                      <Select defaultValue={screentypeok}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Screen Type</SelectLabel>
                            <SelectItem value="default">Bayerische Oberlandbahn</SelectItem>
                            <SelectItem value="sbahn-muc">S-Bahn München</SelectItem>
                            <SelectItem value="ubahn-muc">U-Bahn München</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex">
                  <Link
                    href={`/dashboard/screen?action=edit&screenId=${screen.screenid}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 w-full"
                  >
                    Save
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
