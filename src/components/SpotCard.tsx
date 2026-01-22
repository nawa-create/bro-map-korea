import { motion } from 'framer-motion';
import { Spot } from '../types';

interface SpotCardProps {
  spot: Spot;
  distance: number;
  rank: number;
}

const categoryEmoji: Record<string, string> = {
  morning: '🌅',
  food: '🍖',
  cafe: '☕',
  drink: '🍺',
  activity: '🎮',
  relax: '🧖',
  night: '🪩'
};

const priceLabel = ['', '₩', '₩₩', '₩₩₩'];

export function SpotCard({ spot, distance, rank }: SpotCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.1 }}
      className="glass rounded-2xl p-5 neon-border"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{categoryEmoji[spot.category]}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{spot.name}</h3>
            <p className="text-sm text-gray-400">{spot.nameKo}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-neon-pink font-bold">{distance.toFixed(1)}km</span>
          <p className="text-xs text-gray-500">{spot.area}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-3">{spot.description}</p>

      <div className="bg-dark-700 rounded-xl p-3 mb-4">
        <p className="text-neon-yellow text-sm font-medium">
          💡 BRO TIP: {spot.broTip}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <span>{priceLabel[spot.priceRange]}</span>
        <span>👥 {spot.groupRating}/5</span>
        <span>🕐 {spot.hours}</span>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span>🚇</span>
        <span>{spot.transport}</span>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {spot.tags.map(tag => (
          <span 
            key={tag}
            className="px-2 py-1 bg-dark-700 rounded-full text-xs text-gray-400"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-xl text-center font-bold text-white hover:opacity-90 transition-opacity"
      >
        GO NOW →
      </a>
    </motion.div>
  );
}
