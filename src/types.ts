export type Category = 'morning' | 'food' | 'cafe' | 'drink' | 'activity' | 'relax' | 'night';

export type TimeSlot = 'morning' | 'lunch' | 'afternoon' | 'evening' | 'night' | 'latenight';

export interface Spot {
  id: string;
  name: string;
  nameKo: string;
  category: Category;
  timeSlots: TimeSlot[];
  lat: number;
  lng: number;
  area: string;
  description: string;
  broTip: string;
  priceRange: 1 | 2 | 3;
  groupRating: number;
  transport: string;
  hours: string;
  tags: string[];
}

export interface Location {
  lat: number;
  lng: number;
}
