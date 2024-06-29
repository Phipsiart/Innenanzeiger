'use client';
import { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function TrainMap({ tripId }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const popup = useRef(null); // Ref for the popup
  const [lng, setLng] = useState(13.404954);
  const [lat, setLat] = useState(52.520008);
  const [zoom] = useState(13);
  const [speed, setSpeed] = useState(null); // State to store the speed
  const [LineData, setLineData] = useState('');
  const [Destination, setDestination] = useState('');
  let previousCoordinates = useRef({ lng, lat });
  let previousTimestamp = useRef(Date.now());

  const haversineDistance = (coords1, coords2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371e3; // Earth radius in meters
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/map/getposition?tripId=${encodeURIComponent(tripId)}`); // Replace with your JSON data URL
        const data = await response.json();
        const { latitude, longitude } = data.data.currentLocation; // Adjust the path according to your JSON structure

        const currentTimestamp = Date.now();
        const previousCoord = previousCoordinates.current;
        const previousTime = previousTimestamp.current;

        // Calculate the distance and time difference
        const distance = haversineDistance(previousCoord, { lat: latitude, lng: longitude });
        const timeDifference = (currentTimestamp - previousTime) / 1000; // in seconds

        // Calculate speed in meters per second
        const calculatedSpeed = distance / timeDifference;

        // Update state and refs
        setLng(longitude);
        setLat(latitude);
        setSpeed(calculatedSpeed);
        setLineData(data.data.line || 'n/a');
        setDestination(data.data.destination);
        previousCoordinates.current = { lng: longitude, lat: latitude };
        previousTimestamp.current = currentTimestamp;

        console.log('Currently at ' + longitude + ', ' + latitude);
        console.log('Speed: ' + calculatedSpeed + ' m/s');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 15 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [tripId]);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.leberkasrechner.de/styles/osm-bright/style.json',
      center: [lng, lat],
      zoom: zoom,
    });

    // Create a custom HTML element for the marker
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.backgroundImage = 'url(https://example.com/path/to/your/custom-icon.png)'; // Replace with your custom icon URL
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.backgroundSize = '100%';
    el.style.borderRadius = '50%';
    el.style.border = '2px solid white';

    marker.current = new maplibregl.Marker(el).setLngLat([lng, lat]);

    popup.current = new maplibregl.Popup({ closeOnClick: false }) // Ensure popup remains open
      .setHTML(`
        <div style="font-family: Arial, sans-serif; font-size: 14px;">
          <h3 style="margin: 0; font-size: 16px;"></h3>
          <p style="margin: 0;">Longitude: ${lng}</p>
          <p style="margin: 0;">Latitude: ${lat}</p>
          <p style="margin: 0;">Speed: ${speed ? speed.toFixed(2) : 'Calculating...'} m/s</p>
        </div>`);

    marker.current.setPopup(popup.current).addTo(map.current);
    popup.current.addTo(map.current);
  }, [lng, lat, zoom, speed]);

  useEffect(() => {
    if (map.current && marker.current) {
      map.current.easeTo({
        center: [lng, lat],
        essential: true,
        duration: 2000,
      });
      marker.current.togglePopup();

      marker.current.setLngLat([lng, lat]);

      // Update popup content
      if (popup.current) {
        popup.current.setHTML(`
          <div style=" font-size: 14px;">
            <h3 style="margin: 0; font-size: 16px;">${LineData.name}</h3>
            <p>to ${Destination}
            <p style="marigin: 0;">Speed: ${speed ? Math.round(speed * 3.6) : '0'} km/h</p>
          </div>`);
      }

      // Ensure the popup remains open on data refresh
      marker.current.togglePopup();
    }
  }, [lng, lat, speed, LineData, Destination]);

  return (
    <div className="map-wrap absolute w-full z-[820]">
      <div ref={mapContainer} className="map relative h-screen" />
    </div>
  );
}
