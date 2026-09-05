'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(3,3,3,0)', 'rgba(3,3,3,0.92)']
  );

  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const unsub = scrollY.onChange((v) => setScrolled(v > 20));
    return () => unsub();
  }, [scrollY]);


  const navLinks: Array<{ label: string; href: string }> = [
    {
      label: 'Expera',
      href: 'https://discord.gg/7JEKbBBGsW',
    },
    {
      label: 'Rankings',
      href: '/',
    },
    {
      label: 'Talents',
      href: '/talents',
    },
    {
      label: 'Community',
      href: 'https://discord.gg/Jt56ms6aqh',
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      style={{ backgroundColor: navBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)',
          opacity: scrolled ? 0.6 : 0.3,
          transition: 'opacity 0.4s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          <Link href="/" className="group flex flex-col gap-0.5">

            <motion.span
              whileHover={{ letterSpacing: '0.06em' }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-2xl sm:text-3xl tracking-[0.08em] text-white leading-none gradient-text-bright"
              style={{
                fontFamily: 'var(--font-bebas), Impact, sans-serif',
              }}
            >
              INDOCOMP
            </motion.span>

            <span
              className="text-[9px] tracking-[0.25em] uppercase"
              style={{
                color: 'rgba(255,255,255,0.30)',
                fontFamily: 'var(--font-rajdhani), sans-serif',
              }}
            >
              Blox Fruits · Indonesia
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isExternal = href && href.startsWith('http');
              const Tag = isExternal ? 'a' : Link;

              const extraProps = isExternal
                ? {
                    href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : { href };

              return (
                <motion.div
                  key={label}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Tag
                    {...(extraProps as any)}
                    className="group relative px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 rounded-md"
                    style={{
                      fontFamily: 'var(--font-rajdhani), sans-serif',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'rgba(255,255,255,0.5)';
                    }}
                  >
                    <span
                      className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                    <span className="relative">{label}</span>
                  </Tag>
                </motion.div>
              );
            })}

            <motion.a
              href="https://discord.gg/Jt56ms6aqh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="ml-3 hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.8)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.10)';
                el.style.borderColor = 'rgba(255,255,255,0.22)';
                el.style.color = '#ffffff';
                el.style.boxShadow = '0 0 24px rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.06)';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
                el.style.color = 'rgba(255,255,255,0.8)';
                el.style.boxShadow = 'none';
              }}
            >
              Join Discord
            </motion.a>
          </div>

          <motion.button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col gap-1.5"
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative w-6 h-5">
              <motion.span
                className="absolute left-0 top-[9px] w-6 h-[2px] bg-white rounded-full origin-center"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              />
              <motion.span
                className="absolute left-0 top-[9px] w-6 h-[2px] bg-white rounded-full origin-center"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                style={{ opacity: menuOpen ? 1 : 1 }}
              />
              <motion.span
                className="absolute left-0 top-0 w-6 h-[2px] bg-white rounded-full origin-center"
                animate={menuOpen ? { opacity: 0, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </span>
          </motion.button>

        </div>
      </div>

      <motion.div
        className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        style={{ display: menuOpen ? 'block' : 'none' }}
      >
        <div className="flex flex-col px-5 py-4">
          {navLinks.map(({ label, href }) => {
            const isExternal = href.startsWith('http');

            return isExternal ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-sm font-semibold tracking-widest uppercase text-white/70"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="py-3 text-sm font-semibold tracking-widest uppercase text-white/70"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}

          <a
            href="https://discord.gg/Jt56ms6aqh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white"
            onClick={() => setMenuOpen(false)}
          >
            Join Discord
          </a>
        </div>
      </motion.div>


      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)',
          opacity: borderOpacity,
        }}
      />
    </motion.nav>
  );
}