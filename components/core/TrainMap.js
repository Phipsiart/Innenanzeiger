'use client';
import { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function TrainMap({ tripId }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const popup = useRef(null);
  const [lng, setLng] = useState(13.404954);
  const [lat, setLat] = useState(52.520008);
  const [zoom, setZoom] = useState(13);
  const [speed, setSpeed] = useState(null);
  const [lineData, setLineData] = useState({});
  const [destination, setDestination] = useState('');
  const previousCoordinates = useRef({ lng, lat });
  const previousTimestamp = useRef(Date.now());
  const dataPoints = useRef([]); // Store data points for speed calculation
  const lastCoordinateChange = useRef(Date.now());

  const haversineDistance = (coords1, coords2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371e3; // Earth's radius in meters
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in meters
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/map/getposition?tripId=${encodeURIComponent(tripId)}`);
        const apiresult = await response.json();

        const origin = apiresult.data.origin;
        const destination = apiresult.data.destination;
        const line = apiresult.data.line;
        const currentLocation = apiresult.data.currentLocation;

        const { latitude, longitude } = currentLocation;

        const currentTimestamp = Date.now();
        
        // Check if coordinates have changed
        if (lng !== longitude || lat !== latitude) {
          lastCoordinateChange.current = currentTimestamp; // Update last coordinate change time

          // Store the new data point
          dataPoints.current.push({ lat: latitude, lng: longitude, timestamp: currentTimestamp });

          // Remove points that are older than the last 15 seconds
          const fifteenSecondsAgo = currentTimestamp - 15000;
          dataPoints.current = dataPoints.current.filter(point => point.timestamp >= fifteenSecondsAgo);

          // Calculate speed only if we have at least two data points exactly 15 seconds apart
          if (dataPoints.current.length >= 2) {
            const recentPoints = dataPoints.current.slice(-2);
            const [point1, point2] = recentPoints;
            const distance = haversineDistance(point1, point2);
            const timeDifference = (point2.timestamp - point1.timestamp) / 1000; // Time difference in seconds

            const calculatedSpeed = distance / timeDifference;
            setSpeed(calculatedSpeed);
          }

          setLng(longitude);
          setLat(latitude);
          setLineData(line);
          setDestination(destination);
        } else {
          // If coordinates haven't changed in the last 30 seconds, set speed to 0
          if (currentTimestamp - lastCoordinateChange.current > 30000) {
            setSpeed(0);
          }
        }

        previousCoordinates.current = { lng: longitude, lat: latitude };
        previousTimestamp.current = currentTimestamp;

        console.log(`Currently at ${longitude}, ${latitude}`);
        console.log(`Speed: ${speed ? speed.toFixed(2) : 'Calculating...'} m/s`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const fetchIntervalId = setInterval(fetchData, 17000); // Fetch data every 5 seconds

    return () => clearInterval(fetchIntervalId);
  }, [tripId, lng, lat]);

  useEffect(() => {
    if (!map.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.leberkasrechner.de/styles/osm-bright/style.json',
        center: [lng, lat],
        zoom: zoom,
      });

      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(https://example.com/path/to/your/custom-icon.png)';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.backgroundSize = '100%';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';

      marker.current = new maplibregl.Marker(el).setLngLat([lng, lat]);

      popup.current = new maplibregl.Popup({ closeOnClick: false })
        .setHTML(`
          <div style="font-family: Arial, sans-serif; font-size: 14px;">
            <h3 style="margin: 0; font-size: 16px;"></h3>
            <p style="margin: 0;">Longitude: ${lng}</p>
            <p style="margin: 0;">Latitude: ${lat}</p>
            <p style="margin: 0;">Speed: ${speed ? speed.toFixed(2) : 'Calculating...'} m/s</p>
          </div>`);

      marker.current.setPopup(popup.current).addTo(map.current);
      popup.current.addTo(map.current);
    } else {
      // Update marker position without animation
      if (marker.current) {
        marker.current.setLngLat([lng, lat]);
      }

      // Smoothly move the map to the new center
      map.current.easeTo({
        center: [lng, lat],
        essential: true,
        duration: 1000, // Smooth transition duration in milliseconds
      });

      if (popup.current) {
        popup.current.setHTML(`
          <div style="font-size: 14px;">
            <h3 style="margin: 0; font-size: 16px;">${lineData.name || ''}</h3>
            <p>to ${destination}</p>
            <p style="margin: 0;">Speed: ${speed ? Math.round(speed) : '0'}m/s</p>
          </div>`);
      }
    }
  }, [lng, lat, speed, lineData, destination, zoom]);

  useEffect(() => {
    let zoomOut = true;
    const zoomIntervalId = setInterval(() => {
      if (map.current) {
        if (zoomOut) {
          map.current.easeTo({
            zoom: 6, // Zoom out to show the whole of Germany
            essential: true,
            duration: 12000, // Smooth transition duration of 6 seconds
          });
          zoomOut = false;
        } else {
          map.current.easeTo({
            zoom: 13, // Return to the previous zoom level
            essential: true,
            duration: 12000, // Smooth transition duration of 6 seconds
          });
          zoomOut = true;
        }
      }
    }, 30000); // Toggle zoom every 15 seconds

    return () => clearInterval(zoomIntervalId);
  }, []);

  return (
    <div className="map-wrap absolute w-full z-[820]">
      <div ref={mapContainer} className="map relative h-screen" />
    </div>
  );
}
