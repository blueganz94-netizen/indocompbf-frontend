'use client';

import { motion } from 'framer-motion';
import { Talent } from '@/types/talent';
import { Player } from '@/types/player';

interface TalentCardProps {
  talent: Talent;
  player: Player | undefined;
  index: number;
}

export default function TalentCard({ talent, player, index }: TalentCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: index * 0.06 },
    },
  };

    const isEmptyHolder =
    !talent.holder ||
    talent.holder.trim().toLowerCase() === 'example';

    const playerImage =
    !isEmptyHolder && player?.image
        ? player.image.startsWith('/')
        ? player.image
        : player.image.replace(/^\.\//, '/')
        : null;

    const displayName =
    isEmptyHolder
        ? 'Empty'
        : player?.name ?? talent.holder;

    const isVideo =
        playerImage?.toLowerCase().endsWith('.mp4');

        
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl p-8 overflow-hidden transition-all duration-300"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(24px) saturate(1.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = 'rgba(16, 16, 16, 0.92)';
          el.style.borderColor = 'rgba(255, 255, 255, 0.18)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = 'rgba(10, 10, 10, 0.85)';
          el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        }}
      >
        <div
          className="absolute inset-0 -z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="flex flex-col items-center gap-6 text-center h-full">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-lg blur-2xl"
              style={{
                background: 'rgba(255,255,255,0.06)',
                opacity: 0.5,
              }}
            />
            <img
              src={talent.icon}
              alt={talent.name}
              className="relative w-28 h-28 object-contain drop-shadow-lg"
            />
          </div>

          <div>
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
              style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            >
              Top 1
            </p>
            <h3
              className="text-lg font-bold tracking-wide"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                color: '#ffffff',
              }}
            >
              {talent.name}
            </h3>
          </div>

          <div className="flex items-center gap-3 w-full justify-center pt-2 border-t border-white/10">
            <div className="relative w-10 h-10 flex-shrink-0">
                {playerImage ? (
                    isVideo ? (
                        <video
                        src={playerImage}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-10 h-10 rounded-lg object-cover"
                        />
                    ) : (
                        <img
                        src={playerImage}
                        alt={displayName}
                        className="w-10 h-10 rounded-lg object-cover"
                        />
                    )
                ) : (
                    <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    >
                    <span
                        style={{
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        }}
                    >
                        ?
                    </span>
                    </div>
                )}
                </div>
            <span
              className="text-sm font-semibold"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {displayName}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
