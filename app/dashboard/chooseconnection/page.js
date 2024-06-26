import GetConnections from '@/lib/getconnections';
import MainHeadline from '@/components/core/MainHeadline';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
export default async function ChooseConnection({ params, searchParams }) {
  const data = await GetConnections(searchParams.from, searchParams.to, searchParams.departure);
  return (
    <>
      <MainHeadline text="Connections" />
      <div className="flex justify-center mt-12">
        <div className=" max-w-[40rem]">
          <Table>
            <TableCaption>All data without warranty.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Line</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead className="text-right">Delay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((connection) => (
                <TableRow
                  key={Math.floor(Math.random() * 0xffffff)
                    .toString(16)
                    .padEnd(6, '0')}
                  tripId={connection.redirectto}
                  className={`cursor-pointer ${connection.tripId}`}
                >
                  <TableCell className="font-medium">{connection.line}</TableCell>
                  <TableCell>{connection.destination}</TableCell>
                  <TableCell>{connection.plannedDeparture}</TableCell>
                  <TableCell className="text-right">{connection.delay}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter></TableFooter>
          </Table>{' '}
        </div>
      </div>
    </>
  );
}
