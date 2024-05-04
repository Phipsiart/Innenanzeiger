'use client';
import React, { useState, useEffect } from 'react';
import ReplaceNames from '../../lib/filter/ReplaceNames';
const CountdownDisplay = ({ destination, nextStop }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showFullDate, setShowFullDate] = useState(false);
  const [nextStopMessage, setNextStopMessage] = useState('');
  const [showStopName, setShowStopName] = useState(false);

  useEffect(() => {
    // Function to update the current time and next stop message every second
    const updateTimeAndNextStopMessage = () => {
      const now = new Date();
      setCurrentTime(now);

      const nextStopTime = new Date(nextStop.arrival);
      const timeDifferenceInMinutes = (nextStopTime - now) / 1000 / 60;

      if (timeDifferenceInMinutes <= 2) {
        setNextStopMessage(`Nächster Halt:`);
        setTimeout(() => {
          setShowStopName(true);
        }, 2000);
      } else {
        setNextStopMessage('');
        setShowStopName(false);
      }
    };

    // Set up an interval to update the time and next stop message every second
    const intervalId = setInterval(updateTimeAndNextStopMessage, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [nextStop]);

  useEffect(() => {
    // Show the full date for 3 seconds every 5 seconds
    const toggleFullDate = () => {
      setShowFullDate(true);
      setTimeout(() => {
        setShowFullDate(false);
      }, 3000);
    };

    // Set up an interval to toggle the full date display
    const intervalId = setInterval(toggleFullDate, 15000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <div className="text-[8rem] text-center text-[#2c4958] ">
        {nextStopMessage ? (
          <>
            {showStopName && (
              <p className="nextstoptopbar nextstopanimation">
                {nextStop.stop.name
                  .replace(/München-/g, '')
                  .split('Gl.')[0]
                  .trim()
                  .replace(/, München/g, '')}
              </p>
            )}
          </>
        ) : showFullDate ? (
          formattedTime
        ) : (
          destination
        )}
      </div>
    </>
  );
};

export default CountdownDisplay;
