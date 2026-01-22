import { Category } from '../types';

interface CategoryFilterProps {
  selected: Category | 'all';
  onSelect: (category: Category | 'all') => void;
}

const categories: { id: Category | 'all'; emoji: string; label: string }[] = [
  { id: 'all', emoji: '🔥', label: 'ALL' },
  { id: 'morning', emoji: '🌅', label: '朝' },
  { id: 'food', emoji: '🍖', label: '飯' },
  { id: 'cafe', emoji: '☕', label: 'カフェ' },
  { id: 'drink', emoji: '🍺', label: '酒' },
  { id: 'activity', emoji: '🎮', label: '遊び' },
  { id: 'relax', emoji: '🧖', label: 'リラ' },
  { id: 'night', emoji: '🪩', label: '夜' },
];

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selected === cat.id
              ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white'
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
}
