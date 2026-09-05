'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from '@/components/Hero';
import TierSection from '@/components/TierSection';
import FruitFilter, {
  FruitFilterValue,
} from '@/components/FruitFilter';
import TierFilter, {
  TierFilterValue,
} from '@/components/TierFilter';
import ProtestSection from '@/components/ProtestSection';
import Footer from '@/components/Footer';

import {
  groupPlayersByTier,
  getTierOrder,
  getTierDisplayName,
} from '@/lib/groupPlayers';

import { getPlayers, getTalents, Talent } from '@/lib/api';
import { Player } from '@/types/player';

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeFruit, setActiveFruit] =
    useState<FruitFilterValue>('ALL');

  const [activeTier, setActiveTier] =
    useState<TierFilterValue>('ALL');

  useEffect(() => {
    let mounted = true;

    async function loadPlayers() {
      try {
        setLoading(true);
        setError(null);

        const [data, talentsData] = await Promise.all([
          getPlayers(),
          getTalents(),
        ]);

        if (mounted) {
          setPlayers(data);
          setTalents(talentsData);
        }
      } catch (err) {
        console.error('Failed to load players:', err);

        if (mounted) {
          setError('Failed to load player rankings.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadPlayers();

    return () => {
      mounted = false;
    };
  }, []);

  const groupedPlayers = useMemo(() => {
    return groupPlayersByTier(players);
  }, [players]);

  const tierOrder = getTierOrder();

  const filteredGroups = useMemo(() => {
    const result: Record<string, Player[]> = {};

    tierOrder.forEach((tier) => {
      let tierPlayers = groupedPlayers[tier] ?? [];

      if (activeFruit !== 'ALL') {
        const fruitKey = activeFruit.toLowerCase();

        tierPlayers = tierPlayers.filter(
          (player) =>
            typeof player.fruit === 'string' &&
            player.fruit.toLowerCase() === fruitKey
        );
      }

      if (activeTier !== 'ALL' && tier !== activeTier) {
        tierPlayers = [];
      }

      result[tier] = tierPlayers;
    });

    return result as typeof groupedPlayers;
  }, [
    activeFruit,
    activeTier,
    groupedPlayers,
    tierOrder,
  ]);

  const filterKey = `${activeFruit}-${activeTier}`;

  return (
    <main className="relative min-h-screen bg-black">
      <Hero />

      <FruitFilter
        active={activeFruit}
        onChange={setActiveFruit}
      />

      <TierFilter
        active={activeTier}
        onChange={setActiveTier}
      />

      <motion.div
        id="tiers"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="font-rajdhani text-sm uppercase tracking-[0.2em] text-white/30">
              Loading rankings...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-[300px] items-center justify-center px-6 text-center">
            <div>
              <p className="font-rajdhani text-sm uppercase tracking-[0.2em] text-red-400/70">
                {error}
              </p>

              <p className="mt-2 font-outfit text-xs text-white/25">
                Make sure the backend API is running.
              </p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={filterKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tierOrder.map((tier, index) => (
                <TierSection
                  key={tier}
                  tier={tier}
                  displayName={getTierDisplayName(tier)}
                  players={filteredGroups[tier] ?? []}
                  talents={talents}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      <motion.div
        id="protest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ProtestSection />
      </motion.div>

      <Footer />
    </main>
  );
}