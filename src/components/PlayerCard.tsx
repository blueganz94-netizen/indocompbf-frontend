"use client";

import { motion } from 'framer-motion';
import { Player } from '@/types/player';
import { MessageCircle, Youtube, Music2 } from 'lucide-react';

interface TalentLike {
  name: string;
  holder: string;
}

interface PlayerCardProps {
  player: Player;
  index: number;
  allTalents?: TalentLike[];
}

export default function PlayerCard({ player, index, allTalents = [] }: PlayerCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const socialButtons = [
    { icon: MessageCircle, label: 'Discord', url: player.discord },
    { icon: Youtube,        label: 'YouTube', url: player.youtube },
    { icon: Music2,         label: 'TikTok',  url: player.tiktok  },
  ];

  const initials = player.name
    .split(/[\s_-]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  const fruit =
    typeof player.fruit === 'string'
      ? player.fruit
      : undefined;

  const playerTalents = allTalents.filter(
    (talent) =>
      talent.holder &&
      talent.holder !== 'Example' &&
      talent.holder.toLowerCase() === player.name.toLowerCase()
  );

  const resolveMediaSrc = (image: string | null | undefined) => {
    if (!image) return '/players/placeholder.png';

    if (image.startsWith('http')) return image;

    // New uploads live on the backend now (uploads/players/...),
    // legacy paths (/players/...) still live in the frontend's public/ folder.
    if (image.startsWith('/uploads/')) {
      return `${process.env.NEXT_PUBLIC_API_URL}${image}`;
    }

    return image.startsWith('/') ? image : image.replace(/^\.\//, '/');
  };

  const mediaSrc = resolveMediaSrc(player.image);

  const isDeveloper = player.name.toLowerCase() === 'zarr';

  const isVideo =
    mediaSrc.toLowerCase().endsWith('.mp4') ||
    mediaSrc.toLowerCase().endsWith('.webm') ||
    mediaSrc.toLowerCase().endsWith('.mov');

  const activeSocialButtons = socialButtons.filter(
    ({ url }) => typeof url === 'string' && url.trim() !== ''
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
      className="group relative w-full h-[200px]"
    >
      <div
        className="absolute -inset-px rounded-[1.1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: '0 0 40px rgba(255,255,255,0.06), 0 16px 50px rgba(0,0,0,0.5)' }}
      />
      <div
        className="relative h-full rounded-[1.05rem] overflow-hidden flex flex-col"
        style={{
          background: 'rgba(10, 10, 10, 0.88)',
          backdropFilter: 'blur(30px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(30px) saturate(1.6)',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'rgba(255,255,255,0.13)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'rgba(255,255,255,0.06)';
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.035) 0%, transparent 50%)',
            borderRadius: '1.05rem',
          }}
        />

        <div className="relative z-10 flex flex-1 items-start gap-5 px-5 pt-5 pb-4 overflow-hidden">

          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl"
              style={{
                width: 96,
                height: 96,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)' }}
              />

              {isVideo ? (
                <video
                  src={mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={mediaSrc}
                  alt={player.name}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: 'block' }}
                />
              )}

              {(!player.image || player.image.toLowerCase().includes('example.png')) && (
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '2rem',
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.55)',
                    textShadow: '0 0 20px rgba(255,255,255,0.15)',
                    zIndex: 5,
                  }}
                >
                  {initials || player.name.charAt(0).toUpperCase()}
                </motion.span>
              )}

              <div
                className="absolute top-0 left-0 w-1/2 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07), transparent)' }}
              />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0 pt-0.5">
            <h3
              className="leading-tight transition-colors duration-300 group-hover:text-white truncate"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'rgba(255,255,255,0.92)',
                marginBottom: '0.35rem',
              }}
            >
              {player.name}
            </h3>

            {isDeveloper && (
              <span
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '0.68rem',
                  color: 'rgba(255,255,255,0.50)',
                  letterSpacing: '0.10em',
                  marginBottom: '0.45rem',
                  display: 'block',
                }}
              >
                ◆ INDOCOMPBF DEVELOPER
              </span>
            )}

            {playerTalents.length > 0 && (
              <div
                style={{
                  overflowY: 'auto',
                  maxHeight: 73,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  marginTop: isDeveloper ? 0 : '0.1rem',
                  paddingRight: '2px',
                }}
              >
                {playerTalents.map((talent) => (
                  <span
                    key={talent.name}
                    style={{
                      fontFamily: 'var(--font-outfit), sans-serif',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.60)',
                      letterSpacing: '0.03em',
                      fontWeight: 600,
                      lineHeight: 1.35,
                      flexShrink: 0,
                    }}
                  >
                    Top 1 {talent.name} ID
                  </span>
                ))}
              </div>
            )}
          </div>

          {fruit && (
            <div className="flex-shrink-0 self-center">
              <img
                src={`/fruits/${fruit}.png`}
                alt={`${fruit} fruit`}
                title={fruit}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                }}
                className="object-contain transition-transform duration-200 hover:scale-110"
                style={{
                  width: 68,
                  height: 68,
                  opacity: 0.93,
                  filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))',
                }}
              />
            </div>
          )}
        </div>

        <div
          className="mx-5 h-px flex-shrink-0"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
        />

        <div className="relative z-10 flex gap-2 px-5 pt-3 pb-5 flex-shrink-0">
          {activeSocialButtons.map(({ icon: Icon, label, url }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.10, y: -2 }}
              whileTap={{ scale: 0.93 }}
              title={label}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.09)';
                el.style.borderColor = 'rgba(255,255,255,0.18)';
                el.style.boxShadow = '0 0 14px rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.boxShadow = 'none';
              }}
            >
              <Icon
                className="w-4 h-4"
                style={{ color: 'rgba(255,255,255,0.52)', transition: 'color 0.25s ease' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '0.67rem',
                  letterSpacing: '0.07em',
                  color: 'rgba(255,255,255,0.40)',
                  fontWeight: 600,
                }}
              >
                {label.toUpperCase()}
              </span>
            </motion.a>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)' }}
        />
      </div>
    </motion.div>
  );
}
