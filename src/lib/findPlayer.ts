import { Player } from '@/types/player';

export function findPlayerByName(
  players: Player[],
  playerName: string
): Player | undefined {
  return players.find(
    (player) =>
      player.name.toLowerCase() === playerName.toLowerCase()
  );
}