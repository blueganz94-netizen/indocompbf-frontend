'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TalentCard from '@/components/TalentCard';
import { findPlayerByName } from '@/lib/findPlayer';
import { getTalents, getPlayers, Talent as ApiTalent } from '@/lib/api';
import { Player } from '@/types/player';
import type { TalentCategory } from '@/types/talent';

const TAB_META: Record<'fruit' | 'sword', { label: string }> = {
  fruit: { label: 'FRUITS' },
  sword: { label: 'SWORDS' },
};

function HorizontalRule() {
  return (
    <div
      className="w-full max-w-7xl mx-auto my-2"
      style={{
        height: 1,
        background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent)',
      }}
    />
  );
}

export default function TalentsPage() {
  const [activeTab, setActiveTab] = useState<'fruit' | 'sword'>('fruit');

  const [talents, setTalents] = useState<ApiTalent[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all([getTalents(), getPlayers()])
      .then(([talentsData, playersData]) => {
        if (cancelled) return;
        setTalents(talentsData);
        setPlayers(playersData);
      })
      .catch((err) => {
        console.error('Failed to load talents/players:', err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const TALENT_CATEGORIES: TalentCategory[] = useMemo(
    () => [
      {
        label: 'FRUIT TALENTS',
        key: 'fruit',
        talents: talents.filter((t) => t.category === 'fruit'),
      },
      {
        label: 'SWORD TALENTS',
        key: 'sword',
        talents: talents.filter((t) => t.category === 'sword'),
      },
    ],
    [talents]
  );

  const activeCategory = TALENT_CATEGORIES.find((c) => c.key === activeTab)!;

  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] flex flex-col items-center justify-center px-5 pt-32 pb-20"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 rounded-full blur-3xl"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{
              fontFamily: 'var(--font-bebas), Impact, sans-serif',
              background: 'linear-gradient(160deg, #ffffff 0%, #e8e8e8 40%, #aaaaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.25))',
            }}
          >
            TALENTS
          </h1>
          <p
            className="text-base md:text-lg tracking-wide"
            style={{ color: 'rgba(255, 255, 255, 0.45)' }}
          >
            Showcase of the current Top 1 holders in the competitive scene
          </p>
        </motion.div>
      </motion.section>

      <HorizontalRule />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="flex justify-center px-5 pt-12 pb-2"
      >
        <div
          className="relative inline-flex gap-1 p-1.5 rounded-2xl"
          style={{
            background: 'rgba(8, 8, 8, 0.92)',
            backdropFilter: 'blur(28px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            boxShadow:
              '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {TALENT_CATEGORIES.map((category) => {
            const isActive = activeTab === category.key;
            const { label } = TAB_META[category.key];

            return (
              <motion.button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className="relative flex items-center gap-2.5 px-7 py-3 rounded-xl z-10 cursor-pointer select-none"
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-active-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.20)',
                      boxShadow:
                        '0 0 24px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.12)',
                    }}
                    transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                  />
                )}

                {isActive && (
                  <motion.div
                    layoutId="tab-accent-line"
                    className="absolute top-0 left-3 right-3 rounded-full"
                    style={{
                      height: 1.5,
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.55) 60%, transparent)',
                    }}
                    transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                  />
                )}

                <motion.span
                  animate={{
                    color: isActive
                      ? 'rgba(255,255,255,0.95)'
                      : 'rgba(255,255,255,0.32)',
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: 'var(--font-bebas), Impact, sans-serif',
                    fontSize: '1.05rem',
                    letterSpacing: '0.22em',
                  }}
                >
                  {label}
                </motion.span>

                <motion.span
                  animate={{
                    color: isActive
                      ? 'rgba(255,255,255,0.50)'
                      : 'rgba(255,255,255,0.18)',
                    background: isActive
                      ? 'rgba(255,255,255,0.09)'
                      : 'rgba(255,255,255,0.04)',
                    borderColor: isActive
                      ? 'rgba(255,255,255,0.14)'
                      : 'rgba(255,255,255,0.06)',
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    border: '1px solid',
                    borderRadius: '0.4rem',
                    padding: '1px 6px',
                    fontFamily: 'var(--font-rajdhani), sans-serif',
                  }}
                >
                  {category.talents.length}
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="relative py-16 md:py-24 px-5 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold tracking-widest"
              style={{
                fontFamily: 'var(--font-bebas), Impact, sans-serif',
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.18em',
              }}
            >
              {activeCategory.label}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            {loading ? (
              <p className="font-outfit text-sm text-white/40">
                Loading talents...
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {activeCategory.talents.map((talent, index) => {
                  const isExample =
                    !talent.holder ||
                    talent.holder.trim().toLowerCase() === 'example';

                  const player = isExample
                    ? undefined
                    : findPlayerByName(players, talent.holder);

                  return (
                    <TalentCard
                      key={`${activeTab}-${talent.name}`}
                      talent={talent}
                      player={player}
                      index={index}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </motion.section>
      </AnimatePresence>

      <HorizontalRule />
      <Footer />
    </main>
  );
}