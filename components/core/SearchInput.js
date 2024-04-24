"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SearchInput() {
  const router = useRouter();

  const [dateTime, setDateTime] = React.useState(() => {
    const date = new Date();
    return date.toISOString();
  });

  const Redirect = () => {
    const from = document.getElementById("from").value || "München Hbf";
    const to = document.getElementById("to").value || "Berlin Hbf";
    console.log(from, to, dateTime);
    router.push(`/connections?from=${from}&to=${to}&departure=${dateTime}`);
  };

  return (
    <div className="flex justify-center mt-12 flex-wrap ">
      <Input type="text" placeholder="From" id="from" className="transition-all max-w-[14rem] mr-2 mt-2 " />
      <Input type="text" placeholder="To" id="to" className="transition-all max-w-[14rem] mr-2 mt-2" />

      <div className="mt-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !dateTime && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateTime ? (
    <span>{format(new Date(dateTime), "MMMM do, yyyy 'at' HH:mm")}</span>
                ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={new Date(dateTime)}
              onSelect={(date) => {
                setDateTime(date.toISOString());
              }}
              initialFocus
            />
            <div className="flex justify-center pb-4 pt-4">
              <Input
                type="time"
                value={format(new Date(dateTime), "HH:mm")}
                onChange={(event) => {
                  const time = event.target.value.split(":");
                  const date = new Date(dateTime);
                  date.setHours(parseInt(time[0]));
                  date.setMinutes(parseInt(time[1]));
                  setDateTime(date.toISOString());
                }}
                className="max-w-[5rem] transition-all"
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Button onClick={Redirect} className="ml-2 mt-2">
        Search
      </Button>
    </div>
  );
}
