import { useState, useEffect } from "react";
export default function BOBClock(){
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
  return(
    <>
          <span className="fixed end-3  text-[2rem]  text-white">
        {time}
      </span>
    </>
  )
}