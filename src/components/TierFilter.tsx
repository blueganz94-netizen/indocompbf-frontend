"use client";

import { motion } from 'framer-motion';
import { Tier } from '@/types/player';

export type TierFilterValue = 'ALL' | Tier;

const FILTERS: TierFilterValue[] = [
  'ALL',
  'HT1', 'LT1',
  'HT2', 'LT2',
  'HT3', 'LT3',
  'HT4', 'LT4',
  'HT5', 'LT5',
];

interface TierFilterProps {
  active: TierFilterValue;
  onChange: (val: TierFilterValue) => void;
}

export default function TierFilter({ active, onChange }: TierFilterProps) {
  return (
    <div className="relative pb-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
        <p
          style={{
            fontFamily: 'var(--font-rajdhani), sans-serif',
            fontSize: '0.68rem',
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          Filter by Tier
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((label) => {
            const isActive = active === label;
            return (
              <motion.button
                key={label}
                onClick={() => onChange(label)}
                whileHover={{ y: -2, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.94 }}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden"
                style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  background: isActive
                    ? 'rgba(255,255,255,0.10)'
                    : 'rgba(255,255,255,0.04)',
                  border: isActive
                    ? '1px solid rgba(255,255,255,0.28)'
                    : '1px solid rgba(255,255,255,0.07)',
                  color: isActive
                    ? 'rgba(255,255,255,0.90)'
                    : 'rgba(255,255,255,0.38)',
                  boxShadow: isActive
                    ? '0 0 18px rgba(255,255,255,0.08)'
                    : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="tier-filter-active"
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="w-full max-w-4xl relative h-px mt-1">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
            }}
          />
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 blur-sm"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
