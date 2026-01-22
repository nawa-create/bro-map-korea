import { useState, useEffect } from 'react';
import { Location } from '../types';

// Default to Myeongdong area
const DEFAULT_LOCATION: Location = {
  lat: 37.5636,
  lng: 126.9869
};

export function useLocation() {
  const [location, setLocation] = useState<Location>(DEFAULT_LOCATION);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLoading(false);
      },
      () => {
        // Use default location if denied
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 300000
      }
    );
  }, []);

  return { location, loading, error };
}
