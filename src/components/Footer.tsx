'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Rankings', href: '#tiers' },
    { label: 'Appeals', href: '#protest' },
    { label: 'Community', href: 'https://discord.gg/Jt56ms6aqh', external: true },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative border-t py-16 md:py-20 px-5 mt-4 overflow-hidden"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-48 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.025) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <h3
              className="leading-none tracking-[0.08em]"
              style={{
                fontFamily: 'var(--font-bebas), Impact, sans-serif',
                fontSize: '1.8rem',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              INDOCOMP
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.28)',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
              className="md:text-left max-w-[220px]"
            >
              Professional competitive ranking platform for Indonesian Blox Fruits players.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <h4
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}
            >
              Navigate
            </h4>
            <div className="flex flex-col items-center gap-2.5">
              {links.map(({ label, href, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5, color: '#ffffff' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.32)',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <h4
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
              }}
            >
              Join Us
            </h4>
            <motion.a
              href="https://discord.gg/Jt56ms6aqh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 rounded-full text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.11)',
                color: 'rgba(255,255,255,0.55)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.09)';
                el.style.borderColor = 'rgba(255,255,255,0.22)';
                el.style.color = '#ffffff';
                el.style.boxShadow = '0 0 24px rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.05)';
                el.style.borderColor = 'rgba(255,255,255,0.11)';
                el.style.color = 'rgba(255,255,255,0.55)';
                el.style.boxShadow = 'none';
              }}
            >
              Discord
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px mb-10 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.07) 60%, transparent)' }}
        />

        <div className="text-center">
          <p
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.20)',
              letterSpacing: '0.04em',
            }}
          >
            INDOCOMP © {year} · Blox Fruits Indonesia Competitive Rankings
          </p>
          <motion.p
            animate={{ opacity: [0.18, 0.40, 0.18] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-2"
            style={{
              fontFamily: 'var(--font-rajdhani), sans-serif',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Built for the competitive community
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
