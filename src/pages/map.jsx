import React, { useEffect, useRef } from 'react';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGFuaS15ZW0iLCJhIjoiY21kM2t2emg4MDU3MzJsc2NjejV3ZDY1YyJ9.hq7OgR2n2NGzU_uKUVqmoA';

const MekelleMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Load Mapbox GL JS script and CSS if not already loaded
    if (!window.mapboxgl) {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
      script.async = true;
      document.body.appendChild(script);
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      script.onload = initializeMap;
    } else {
      initializeMap();
    }

    function initializeMap() {
      window.mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new window.mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [39.4841082, 13.4806718], // Mekelle, Ethiopia
        zoom: 16
      });
      map.addControl(new window.mapboxgl.NavigationControl());
      const geolocate = new window.mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showUserLocation: true,
        showAccuracyCircle: false
      });
      map.addControl(geolocate);
      map.on('load', () => {
        geolocate.trigger();
      });
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }} ref={mapContainer} />
  );
};

export default MekelleMap;
