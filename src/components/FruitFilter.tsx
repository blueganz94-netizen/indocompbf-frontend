"use client";

import { motion } from 'framer-motion';

export type FruitFilterValue = 'ALL' | 'KITSUNE' | 'PORTAL' | 'DOUGH' | 'CONTROL' | 'SOUND' | 'DIAMOND';

const FILTERS: { label: FruitFilterValue; icon?: string }[] = [
  { label: 'ALL' },
  { label: 'KITSUNE', icon: '/fruits/Kitsune.png' },
  { label: 'PORTAL',  icon: '/fruits/Portal.png'  },  
  { label: 'DOUGH',   icon: '/fruits/Dough.png'   },
  { label: 'CONTROL', icon: '/fruits/Control.png' },
  { label: 'SOUND',   icon: '/fruits/Sound.png'   },
  { label: 'DIAMOND', icon: '/fruits/Diamond.png' },
];

interface FruitFilterProps {
  active: FruitFilterValue;
  onChange: (val: FruitFilterValue) => void;
}

export default function FruitFilter({ active, onChange }: FruitFilterProps) {
  return (
    <div className="relative py-10 px-5">
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
          Filter by Fruit
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {FILTERS.map(({ label, icon }) => {
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
                    layoutId="fruit-filter-active"
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {icon && (
                  <img
                    src={icon}
                    alt={label}
                    className="relative z-10 object-contain"
                    style={{
                      width: 20,
                      height: 20,
                      filter: isActive
                        ? 'drop-shadow(0 0 6px rgba(255,255,255,0.5))'
                        : 'opacity(0.55)',
                      opacity: isActive ? 1 : 0.55,
                      transition: 'opacity 0.25s, filter 0.25s',
                    }}
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
