import { Player, Tier } from '@/types/player';

const tierOrder: Tier[] = ['HT1', 'LT1', 'HT2', 'LT2', 'HT3', 'LT3', 'HT4', 'LT4', 'HT5', 'LT5'];

export function groupPlayersByTier(players: Player[]): Record<Tier, Player[]> {
  const grouped: Record<Tier, Player[]> = {
    HT1: [],
    LT1: [],
    HT2: [],
    LT2: [],
    HT3: [],
    LT3: [],
    HT4: [],
    LT4: [],
    HT5: [],
    LT5: [],
  };

  players.forEach(player => {
    if (grouped[player.tier]) {
      grouped[player.tier].push(player);
    }
  });

  return grouped;
}

export function getTierDisplayName(tier: Tier): string {
  const names: Record<Tier, string> = {
    HT1: 'High Tier 1',
    LT1: 'Low Tier 1',
    HT2: 'High Tier 2',
    LT2: 'Low Tier 2',
    HT3: 'High Tier 3',
    LT3: 'Low Tier 3',
    HT4: 'High Tier 4',
    LT4: 'Low Tier 4',
    HT5: 'High Tier 5',
    LT5: 'Low Tier 5',
  };

  return names[tier];
}

export function getTierOrder(): Tier[] {
  return tierOrder;
}
