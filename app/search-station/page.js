'use client';
import  { useState } from "react";
import AutoCompleteArrivalboardSearch from "@/components/core/AutoCompleteArrivalboardSearch";
import Header from "../../components/Header";
import MainHeadline from "@/components/core/MainHeadline";

export default function SearchStation() {
  const [ibnrValue, setIbnrValue] = useState(""); // Store the IBNR value

  return (
    <>
      <Header disablelinks={true} activeheadline="Search Station" />
      <MainHeadline text="Search Station" subtitle="Please enter a station for the Arrival & Departure board to display." />
      <div className="flex justify-center">
        {/* Pass down a function to handle IBNR value when it's selected */}
        <AutoCompleteArrivalboardSearch
          placeholder="Search Station"
          inputid="stationname"
          setIbnrValue={setIbnrValue} // Allow the autocomplete component to set the IBNR value
        />
      </div>
    </>
  );
}
