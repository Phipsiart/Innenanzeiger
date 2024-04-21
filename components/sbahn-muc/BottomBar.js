"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BottomBar({ line, destination, linecolor }) {
  const [time, setTime] = useState("");
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
      setBlink(!blink);
    }, 1000);
    return () => clearInterval(interval);
  }, [blink]);

  // Function to determine line color based on line name
  return (
    <>
      <div className="w-full fixed bottom-0 z-[9999] h-[7.5rem] bg-blue-500">
        <Image
          className="mt-5 ml-6"
          src={`/train-lines/${line}.svg`}
          alt={`${line} Logo (Ilustrational)`}
          height={180}
          width={180}
        />
      </div>
      <div className="fixed bottom-2 left-48 z-[9999]">
        <span className={`text-white  ml-12 text-[4.5rem]`}>{destination}</span>
        <span className="fixed right-4 text-white mt-5 text-[3rem]">{time}</span>
      </div>
      <div className="status fixed bottom-0 h-2 w-full z-[9999]" style={{backgroundColor: linecolor}}></div>
      {/* a cheap way to prevent the scrolling text frlom ovgerlapping (the station list)*/}
    </>
  );
}
