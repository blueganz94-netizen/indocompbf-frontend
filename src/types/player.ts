export type Tier =
  | 'HT1'
  | 'LT1'
  | 'HT2'
  | 'LT2'
  | 'HT3'
  | 'LT3'
  | 'HT4'
  | 'LT4'
  | 'HT5'
  | 'LT5';

export type PlayerFruit =
  | 'Kitsune'
  | 'Portal'
  | 'Dough'
  | 'Control'
  | 'Sound'
  | 'Gas'
  | 'Ghost'
  | 'Diamond'
  | 'Flame';

export interface Player {
  id: number;
  name: string;
  tier: Tier;
  country: string;
  image: string | null;
  fruit?: PlayerFruit | null;
  discord?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
}
