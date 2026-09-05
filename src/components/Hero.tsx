'use client';

import { motion } from 'framer-motion';
import Particles from './Particles';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const lineReveal = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.6) 3px, rgba(255,255,255,0.6) 4px)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />

        <motion.div
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.14) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04], x: [-20, 20, -20] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
        />

        <motion.div
          animate={{ opacity: [0.04, 0.08, 0.04], x: [20, -20, 20] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
        />

        <motion.div
          animate={{ y: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
          className="absolute left-0 right-0 h-px opacity-10"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent)' }}
        />
      </div>

      <Particles />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center w-full max-w-6xl px-5"
      >
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-10">
          <motion.div
            variants={lineReveal}
            className="h-px w-20 origin-right"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4))' }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.38em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-rajdhani), sans-serif' }}
          >
            Indonesia · Blox Fruits · Competitive
          </span>
          <motion.div
            variants={lineReveal}
            className="h-px w-20 origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.4), transparent)' }}
          />
        </motion.div>

        <motion.div variants={item} className="relative mb-6">
          <motion.h1
            className="relative z-10 leading-none tracking-[0.04em] select-none"
            style={{
              fontFamily: 'var(--font-bebas), Impact, sans-serif',
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              color: '#ffffff',
              textShadow: '0 0 60px rgba(255,255,255,0.20), 0 0 120px rgba(255,255,255,0.10)',
            }}
          >
            INDOCOMP
          </motion.h1>
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center leading-none tracking-[0.04em] pointer-events-none select-none"
            style={{
              fontFamily: 'var(--font-bebas), Impact, sans-serif',
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              WebkitTextStroke: '1px rgba(255,255,255,0.06)',
              color: 'transparent',
              transform: 'translate(3px, 3px)',
            }}
          >
            INDOCOMP
          </span>
        </motion.div>

        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-40 h-[1.5px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }}
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 blur-sm"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <h2
            className="font-light tracking-[0.22em] uppercase"
            style={{
              fontFamily: 'var(--font-rajdhani), sans-serif',
              fontSize: 'clamp(0.7rem, 2.2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.22em',
            }}
          >
            Indonesia Blox Fruits Competitive Rankings
          </h2>
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-lg mx-auto mb-14 leading-relaxed"
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 'clamp(0.82rem, 1.6vw, 0.97rem)',
            color: 'rgba(255,255,255,0.32)',
          }}
        >
          The official competitive ranking board for Indonesian Blox Fruits players.{' '}
          <span style={{ color: 'rgba(255,255,255,0.50)' }}>Ranked and verified by the community.</span>
        </motion.p>

        <motion.div variants={item} className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('tiers')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 overflow-hidden rounded-full"
            style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'rgba(255,255,255,0.055)', backdropFilter: 'blur(12px)' }}
            />

            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
                width: '200%',
                left: '-50%',
              }}
            />

            <motion.div
              animate={{ borderColor: ['rgba(255,255,255,0.14)', 'rgba(255,255,255,0.28)', 'rgba(255,255,255,0.14)'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border"
            />

            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ boxShadow: '0 0 40px rgba(255,255,255,0.15)' }}
            />

            <span
              className="relative font-bold tracking-[0.22em] uppercase text-sm"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              View Rankings
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-10 mt-16"
        >
          {[
            { num: '10', label: 'Tier Levels' },
            { num: 'ID', label: 'Indonesia' },
            { num: 'BF', label: 'Blox Fruits' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.06em',
                }}
              >
                {num}
              </div>
              <div
                className="text-[9px] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-rajdhani), sans-serif' }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.20)' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-0.5 h-2 rounded-full"
            style={{ background: 'rgba(255,255,255,0.5)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
