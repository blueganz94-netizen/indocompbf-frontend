'use client';

import { motion } from 'framer-motion';
import { Player } from '@/types/player';
import PlayerCard from './PlayerCard';

interface TalentLike {
  name: string;
  holder: string;
}

interface TierSectionProps {
  tier: string;
  displayName: string;
  players: Player[];
  talents?: TalentLike[];
  index: number;
}

const TIER_GLOW: Record<string, number> = {
  HT1: 0.28, LT1: 0.22, HT2: 0.18, LT2: 0.14,
  HT3: 0.11, LT3: 0.09, HT4: 0.07, LT4: 0.06,
  HT5: 0.05, LT5: 0.04,
};

const TIER_LABEL_OPACITY: Record<string, number> = {
  HT1: 0.08, LT1: 0.065, HT2: 0.055, LT2: 0.045,
  HT3: 0.038, LT3: 0.032, HT4: 0.028, LT4: 0.024,
  HT5: 0.02, LT5: 0.018,
};

export default function TierSection({ tier, displayName, players, talents = [], index }: TierSectionProps) {
  if (players.length === 0) return null;

  const glowStrength = TIER_GLOW[tier] ?? 0.06;
  const labelOpacity = TIER_LABEL_OPACITY[tier] ?? 0.02;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.12 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      className="relative py-24 md:py-32 px-5 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,${glowStrength * 0.4}) 30%, rgba(255,255,255,${glowStrength * 0.4}) 70%, transparent)` }}
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ opacity: [labelOpacity * 5, labelOpacity * 9, labelOpacity * 5] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 rounded-full blur-3xl"
          style={{ background: `rgba(255,255,255,${glowStrength * 0.2})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 md:mb-20">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden
          >
            <span
              style={{
                fontFamily: 'var(--font-bebas), Impact, sans-serif',
                fontSize: 'clamp(8rem, 25vw, 20rem)',
                letterSpacing: '0.04em',
                WebkitTextStroke: `2px rgba(255,255,255,${labelOpacity * 3})`,
                color: 'transparent',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              {tier}
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="relative z-10 flex flex-col items-center gap-6 pt-8 pb-2"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="flex items-center gap-5 md:gap-8 w-full max-w-4xl"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="flex-1 h-px origin-right"
                style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,${glowStrength}))` }}
              />

              <div className="text-center flex-shrink-0">
                <motion.h2
                  whileHover={{ letterSpacing: '0.12em', transition: { duration: 0.4 } }}
                  style={{
                    fontFamily: 'var(--font-bebas), Impact, sans-serif',
                    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                    letterSpacing: '0.08em',
                    lineHeight: 1,
                    color: `rgba(255,255,255,${0.55 + glowStrength * 1.5})`,
                    textShadow: `0 0 40px rgba(255,255,255,${glowStrength}), 0 0 80px rgba(255,255,255,${glowStrength * 0.5})`,
                  }}
                >
                  {tier}
                </motion.h2>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="flex-1 h-px origin-left"
                style={{ background: `linear-gradient(90deg, rgba(255,255,255,${glowStrength}), transparent)` }}
              />
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
              className="flex flex-col items-center gap-3"
            >
              <p
                style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.30em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                {displayName}
              </p>

              <div className="relative h-[2px] w-24">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,${glowStrength * 1.5}), transparent)` }}
                />
                <motion.div
                  animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full blur-sm"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,${glowStrength}), transparent)` }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } } }}
            >
              <div
                className="px-5 py-1.5 rounded-full text-xs tracking-[0.20em] uppercase"
                style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid rgba(255,255,255,${glowStrength * 0.6})`,
                  color: 'rgba(255,255,255,0.30)',
                }}
              >
                {players.length} {players.length === 1 ? 'Player' : 'Players'}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {players.map((player, playerIndex) => (
            <motion.div key={player.id} variants={cardItem} layout>
              <PlayerCard player={player} index={playerIndex} allTalents={talents} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }}
      />
    </motion.section>
  );
}
