'use client';
import * as React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import AutoCompleteSearch from './AutoCompleteSearch';

export function SearchInput() {
  const fromRef = React.useRef(null);
  const toRef = React.useRef(null);

  const [dateTime, setDateTime] = React.useState(() => {
    const date = new Date();
    return date.toISOString();
  });

  const getSearchUrl = () => {
    const from = fromRef.current?.value || 'München Hbf';
    const to = toRef.current?.value || 'Berlin Hbf';
    return `/connections?from=${from}&to=${to}&departure=${dateTime}`;
  };

  return (
    <div className="flex justify-center mt-12 flex-wrap ">
      <AutoCompleteSearch placeholder="From" inputRef={fromRef} />
      <AutoCompleteSearch placeholder="To" inputRef={toRef} />

      <div className="mt-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn('w-[280px] justify-start text-left font-normal', !dateTime && 'text-muted-foreground')}
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
                value={format(new Date(dateTime), 'HH:mm')}
                onChange={(event) => {
                  const time = event.target.value.split(':');
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

      {/* Verwende Link für die Navigation */}
      <Link href={getSearchUrl()} passHref>
        <Button className="ml-2 mt-2">
          Search
        </Button>
      </Link>
    </div>
  );
}
