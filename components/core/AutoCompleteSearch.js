'use client';
import { Input } from '../ui/input';
import { useState, useEffect, useRef } from 'react';

export default function AutoCompleteSearch({ placeholder, inputid }) {
  const [stations, setStations] = useState([]);
  const [search, setSearch] = useState('');
  const inputRef = useRef(); // Create a ref for the input field

  useEffect(() => {
    if (search !== '') {
      fetch(`/api/search?q=${search}`)
        .then((response) => response.json())
        .then((data) => setStations(data.bestMatches));
    } else {
      setStations([]); // Clear the stations list when search is empty
    }
  }, [search]); // Added search as a dependency

  const handleStationClick = (stationName) => {
    setSearch(stationName); // Set the input field value to the selected station name
    setStations([]); // Clear the stations list
  };

  return (
    <>
      <div className="block max-w-xs mt-2 mr-2">
        <Input
          placeholder={placeholder}
          id={inputid}
          value={search}
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setTimeout(() => setStations([]), 200)} // Hide the results when the input field is not focused
        />
        {search !== '' && stations.length > 0 && document.activeElement === inputRef.current ? (
          <div className="z-50 fixed p-2.5 mt-2 cursor-pointer rounded-md border transition-all border-slate-200 bg-white text-slate-950 shadow-md outline-none  w-[13.8rem]">
            {stations.map((station) => (
              <div
                className="text-[1.0rem] hover:bg-gray-200 mt-1 rounded p-1"
                key={station.id}
                onClick={() => handleStationClick(station.name)}
              >
                <span>{station.name}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
