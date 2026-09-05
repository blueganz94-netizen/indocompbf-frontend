import { Player } from '@/types/player';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not configured');
}

async function parseResponse(response: Response) {
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || `API request failed: ${response.status}`
    );
  }

  return result;
}

export async function getPlayers(): Promise<Player[]> {
  const response = await fetch(`${API_URL}/players/list.php`, {
    cache: 'no-store',
  });

  const result = await parseResponse(response);

  return result.data as Player[];
}

export async function adminLogin(
  username: string,
  password: string
) {
  const response = await fetch(`${API_URL}/auth/login.php`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const result = await parseResponse(response);

  return result.data;
}

export async function adminMe() {
  const response = await fetch(`${API_URL}/auth/me.php`, {
    method: 'GET',
    credentials: 'include',
  });

  const result = await parseResponse(response);

  return result.data;
}

export async function adminLogout() {
  const response = await fetch(`${API_URL}/auth/logout.php`, {
    method: 'POST',
    credentials: 'include',
  });

  const result = await parseResponse(response);

  return result.data;
}

export interface PlayerPayload {
  name: string;
  tier: string;
  country: string;
  image: string;
  fruit: string;
  discord: string;
  youtube: string;
  tiktok: string;
}

export async function createPlayer(
  player: PlayerPayload
): Promise<Player> {
  const response = await fetch(`${API_URL}/players/create.php`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });

  const result = await parseResponse(response);

  return result.data as Player;
}

export async function updatePlayer(
  id: number,
  player: PlayerPayload
): Promise<Player> {
  const response = await fetch(
    `${API_URL}/players/update.php?id=${id}`,
    {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    }
  );

  const result = await parseResponse(response);

  return result.data as Player;
}

export async function deletePlayer(id: number) {
  const response = await fetch(
    `${API_URL}/players/delete.php?id=${id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    }
  );

  const result = await parseResponse(response);

  return result.data;
}

export interface PlayerImage {
  filename: string;
  url: string;
  size: number;
  modified_at: string;
}

export async function getPlayerImages(): Promise<PlayerImage[]> {
  const response = await fetch(`${API_URL}/players/images.php`, {
    cache: 'no-store',
  });

  const result = await parseResponse(response);

  return result.data as PlayerImage[];
}

export async function uploadPlayerImage(
  file: File,
  name?: string
): Promise<PlayerImage> {
  const formData = new FormData();
  formData.append('image', file);

  if (name) {
    formData.append('name', name);
  }

  const response = await fetch(`${API_URL}/players/upload.php`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });

  const result = await parseResponse(response);

  return result.data as PlayerImage;
}


export function playerImageSrc(url: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${API_URL}${url}`;
}

export interface Talent {
  id: number;
  category: 'fruit' | 'sword';
  name: string;
  icon: string;
  holder: string;
}

export async function getTalents(): Promise<Talent[]> {
  const response = await fetch(`${API_URL}/talents/list.php`, {
    cache: 'no-store',
  });

  const result = await parseResponse(response);

  return result.data as Talent[];
}

export async function updateTalentHolder(
  id: number,
  holder: string
): Promise<Talent> {
  const response = await fetch(`${API_URL}/talents/update.php?id=${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ holder }),
  });

  const result = await parseResponse(response);

  return result.data as Talent;
}