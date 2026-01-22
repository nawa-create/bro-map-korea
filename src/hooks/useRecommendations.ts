import { useMemo } from 'react';
import { Spot, TimeSlot, Category, Location } from '../types';
import { spots } from '../data/spots';

function getTimeSlot(hour: number): TimeSlot {
  if (hour >= 6 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 14) return 'lunch';
  if (hour >= 14 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  if (hour >= 21 && hour < 24) return 'night';
  return 'latenight';
}

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function useRecommendations(location: Location, filter: Category | 'all' = 'all') {
  const currentHour = new Date().getHours();
  const currentTimeSlot = getTimeSlot(currentHour);

  const recommendations = useMemo(() => {
    let filtered = spots.filter(spot => 
      spot.timeSlots.includes(currentTimeSlot)
    );

    if (filter !== 'all') {
      filtered = filtered.filter(spot => spot.category === filter);
    }

    // Score and sort
    const scored = filtered.map(spot => {
      const distance = getDistance(location.lat, location.lng, spot.lat, spot.lng);
      const distanceScore = Math.max(0, 10 - distance * 2);
      const groupScore = spot.groupRating * 2;
      const totalScore = distanceScore + groupScore;
      
      return { spot, distance, score: totalScore };
    });

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, 5);
  }, [location, filter, currentTimeSlot]);

  return { recommendations, currentTimeSlot };
}
