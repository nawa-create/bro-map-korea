import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { SpotCard } from './components/SpotCard';
import { useLocation } from './hooks/useLocation';
import { useRecommendations } from './hooks/useRecommendations';
import { Category } from './types';

function App() {
  const { location, loading: locationLoading } = useLocation();
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const { recommendations, currentTimeSlot } = useRecommendations(location, filter);

  if (locationLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-neon-pink border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 px-4 pb-8">
      <Header timeSlot={currentTimeSlot} />
      
      <section className="mb-6">
        <CategoryFilter selected={filter} onSelect={setFilter} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">
            TOP PICKS
          </h2>
          <span className="text-xs text-gray-500">
            {recommendations.length} spots
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {recommendations.length > 0 ? (
              recommendations.map((rec, index) => (
                <SpotCard
                  key={rec.spot.id}
                  spot={rec.spot}
                  distance={rec.distance}
                  rank={index}
                />
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-4xl mb-4">😴</p>
                <p>この時間はスポットがない</p>
                <p className="text-sm mt-2">別のカテゴリを試せ</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <footer className="mt-12 text-center text-gray-600 text-xs">
        <p>BRO MAP KOREA © 2024</p>
        <p className="mt-1">Built for the boys 🤙</p>
      </footer>
    </div>
  );
}

export default App;
