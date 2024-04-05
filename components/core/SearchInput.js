"use client"
 
import * as React from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "../ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Redirect() {
    const router = useRouter()
    const from = document.getElementById("from").value || "München Hbf"
    const to = document.getElementById("to").value || "Berlin Hbf"
    console.log(from + to + date)
    router.push(`/connections?from=${from}&to=${to}&departure=${date}`)
}

const [date, setDate] = React.useState(new Date().toISOString());

React.useEffect(() => {
    const interval = setInterval(() => {
        setDate(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
}, []);

const [time, setTime] = React.useState(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
});
    console.log(date)
  return (
    <div className="flex justify-center mt-12 flex-wrap ">
    <Input type="text" placeholder="From" id="from"  className="transition-all max-w-[14rem] mr-2 mt-2 " />
    <Input type="text" placeholder="To" id="to" className="transition-all max-w-[14rem] mr-2 mt-2" />

    <div className="mt-2">
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
  <span>
    {format(date, "PPP")} {time ? `at ${time}` : ""}
  </span>
) : (
  <span>Pick a date</span>
)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
<div className="flex justify-center pb-4">
<Input type="time"  value={time} onChange={(event) => setTime(event.target.value)} className="max-w-[5rem]" />

</div>
      </PopoverContent>
    </Popover>
    </div>
    <Button onClick={Redirect} className="ml-2 mt-2">Search</Button>
    </div>
  )}
