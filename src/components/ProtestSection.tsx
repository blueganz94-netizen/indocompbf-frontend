  'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Shield } from 'lucide-react';

export default function ProtestSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
      id="protest"
      className="relative py-24 md:py-36 px-5 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)' }}
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="group relative rounded-2xl overflow-hidden"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          style={{
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)' }}
          />

          <div
            className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
          />

          <motion.div
            animate={{ x: [10, -10, 10], y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          />

          <div className="relative z-10 p-10 sm:p-14 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(255,255,255,0)', '0 0 0 8px rgba(255,255,255,0.04)', '0 0 0 0 rgba(255,255,255,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <Shield className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.7)' }} />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold mb-3 leading-tight"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.92)',
              }}
            >
              Think a player is misplaced?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-3"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 400,
                letterSpacing: '0.03em',
              }}
            >
              Want to request a tryout?
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div
                className="h-px w-20"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-10 max-w-md mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.30)',
              }}
            >
              Join our official Discord server and connect with the competitive community.
              Submit appeals, request tryouts, and engage with other players.
            </motion.p>

            <motion.a
              href="https://discord.gg/Jt56ms6aqh"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn inline-flex items-center gap-3 px-9 py-4 rounded-full relative overflow-hidden"
              style={{
                fontFamily: 'var(--font-rajdhani), sans-serif',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.12)';
                el.style.borderColor = 'rgba(255,255,255,0.28)';
                el.style.color = '#ffffff';
                el.style.boxShadow = '0 0 40px rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.07)';
                el.style.borderColor = 'rgba(255,255,255,0.15)';
                el.style.color = 'rgba(255,255,255,0.85)';
                el.style.boxShadow = 'none';
              }}
            >
              <motion.div
                animate={{ x: ['-120%', '120%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)', width: '200%', left: '-50%' }}
              />

              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-bold tracking-[0.18em] uppercase text-sm">
                Join Discord
              </span>
              <ArrowUpRight className="w-4 h-4 relative z-10 opacity-70" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
