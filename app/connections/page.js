import GetConnetions from "../../lib/getconnections"
import MainHeadline from "../../components/core/Mainheadline"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default async function Connections({  params, searchParams,}) {
  const data = await GetConnetions(searchParams.from,searchParams.to, searchParams.departure)
 console.log(data)  
    return(
        <>
        <MainHeadline text="Verbindungen" />
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
          <TableRow  key={connection.tripId} tripId={connection.redirectto}  className={`cursor-pointer ${connection.tripId}`}>
            <TableCell className="font-medium">{connection.line}</TableCell>
            <TableCell>{connection.destination}</TableCell>
            <TableCell>{connection.plannedDeparture}</TableCell>
            <TableCell className="text-right">{connection.delay}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>       </div>
</div>
        </>
    )

}