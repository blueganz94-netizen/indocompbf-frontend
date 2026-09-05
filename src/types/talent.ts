export interface Talent {
  name: string;
  holder: string;
  icon: string;
}

export interface TalentCategory {
  label: string;
  key: 'fruit' | 'sword';
  talents: Talent[];
}

export interface TalentsData {
  fruits: Talent[];
  swords: Talent[];
}