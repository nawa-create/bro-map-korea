import { TimeSlot } from '../types';

interface HeaderProps {
  timeSlot: TimeSlot;
}

const timeMessages: Record<TimeSlot, { title: string; subtitle: string }> = {
  morning: { title: '朝だ。', subtitle: '腹を満たせ。' },
  lunch: { title: '昼飯の時間だ。', subtitle: '迷うな、食え。' },
  afternoon: { title: '午後だ。', subtitle: '散策するか？' },
  evening: { title: '夕方だ。', subtitle: '肉を焼け。' },
  night: { title: '夜だ。', subtitle: '攻めろ。' },
  latenight: { title: '深夜だ。', subtitle: 'まだ終わらない。' },
};

export function Header({ timeSlot }: HeaderProps) {
  const message = timeMessages[timeSlot];

  return (
    <header className="pt-12 pb-6">
      <h1 className="font-display text-5xl tracking-wider text-gradient mb-2">
        BRO MAP
      </h1>
      <p className="text-xl text-white font-bold">{message.title}</p>
      <p className="text-neon-pink">{message.subtitle}</p>
      <p className="text-xs text-gray-500 mt-4">考えるな、動け。</p>
    </header>
  );
}
