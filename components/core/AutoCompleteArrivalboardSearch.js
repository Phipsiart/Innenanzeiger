'use client';
import { Input } from '../ui/input';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // For redirecting

export default function AutoCompleteArrivalBoardSearch({ placeholder, inputid }) {
  const [stations, setStations] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedStationId, setSelectedStationId] = useState(null); // Store the selected station id
  const inputRef = useRef(); // Create a ref for the input field
  const router = useRouter(); // For programmatic navigation

  // Trigger fetch when the search term changes
  useEffect(() => {
    if (search !== '') {
      fetch(`/api/search?q=${search}`)
        .then((response) => response.json())
        .then((data) => setStations(data.bestMatches));
    } else {
      setStations([]); // Clear suggestions when search is empty
    }
  }, [search]); // Dependency on search

  // Handle station selection and update input and hidden field
  const handleStationClick = (stationName, stationId) => {
    setSearch(stationName); // Update the input field with the selected station
    setSelectedStationId(stationId); // Set the selected station id in the state
    setStations([]); // Clear the stations list after selection
  };

  // Function to read the IBNR value when the user clicks "Search"
  const handleSearch = () => {
    const ibnrValue = document.getElementById('IBNR').value; // Read the hidden input field value
    if (ibnrValue) {
      // Redirect to the new page with IBNR value in the URL
      router.push(`/arrivals/${ibnrValue}?show=departures`);
    } else {
      alert('Please select a station.');
    }
  };

  return (
    <>
      <div className="block max-w-xs mt-2 mr-2">
        {/* Hidden input to store the selected station ID */}
        <Input 
          id="IBNR" 
          type="hidden" 
          value={selectedStationId || ''} // Store the selected station id in state
        />
        <Input
          placeholder={placeholder}
          id={inputid}
          value={search}
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value)} // Update search term
          onBlur={() => setTimeout(() => setStations([]), 200)} // Hide results when focus is lost
        />
        {search !== '' && stations.length > 0 && document.activeElement === inputRef.current ? (
          <div className="z-50 fixed p-2.5 mt-2 cursor-pointer rounded-md border transition-all border-slate-200 bg-white text-slate-950 shadow-md outline-none w-[13.8rem]">
            {stations.map((station) => (
              <div
                className="text-[1.0rem] hover:bg-gray-200 mt-1 rounded p-1"
                key={station.id}
                onClick={() => handleStationClick(station.name, station.id)} // Set station name and id
              >
                <span>{station.name}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 ml-2 mt-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
}
