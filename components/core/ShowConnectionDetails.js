import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import React from 'react';
export default function ShowConnectionDetails({ legs }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="max-w-[20rem]" value="item-1">
        <div className="flex justify-center">
          <AccordionTrigger>Show Details</AccordionTrigger>
        </div>
        <AccordionContent>
          {legs.map((leg) => (
            <React.Fragment key={`${leg.id}-${leg.line}-${leg.plannedDeparture}`}>
              {leg.walking ? (
                <div className="m-2 bg-gray-300 hover:bg-gray-800 hover:text-white transition-all p-2 rounded-lg mt-2 flex justify-between items-center">
                  <span>Transfer in {leg.origin}</span>
                </div>
              ) : (
                <Link
                  key={`${leg.id}-${leg.line}-${leg.plannedDeparture}`}
                  href={`/departures/${encodeURIComponent(leg.tripId)}`}
                  className="m-2 bg-gray-300 hover:bg-gray-800 hover:text-white transition-all p-2 rounded-lg mt-2 flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <p>{leg.line}</p>
                    <p>{leg.destination}</p>
                  </div>
                  <Link href={`/map?tripId=${leg.tripId}`} className="hover:text-green-500">
                    show on map
                  </Link>
                  <div className="flex justify-end">
                    <p>{leg.plannedDeparture}</p>
                  </div>
                </Link>
              )}
            </React.Fragment>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
