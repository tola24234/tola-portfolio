import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────
   PROFILE PHOTO — fixed overflow, cleaner glow
───────────────────────────────────────────────────────────────────── */
function ProfilePhoto() {
  const [err, setErr] = useState(false);

  return (
    /* Outer wrapper: gives space for the corner brackets without overflow */
    <div className="relative flex-shrink-0" style={{ width: 320, height: 400 }}>

      {/* Ambient glow — sits BEHIND everything, contained */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: -24,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.22) 0%, transparent 65%)',
          filter: 'blur(32px)',
        }}
        aria-hidden="true"
      />

      {/* Slow-spin conic border ring */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ inset: 0, borderRadius: 22 }}
        aria-hidden="true">
        <motion.div
          className="absolute"
          style={{
            inset: -2, borderRadius: 23,
            background: 'conic-gradient(from 0deg, #22c55e, #4ade80, #16a34a, #22c55e)',
            padding: 2,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
          <div className="w-full h-full" style={{ borderRadius: 21, background: '#080e0d' }} />
        </motion.div>
      </motion.div>

      {/* Corner bracket accents */}
      {[
        { cls: 'top-1 left-1',   b: 'border-t-2 border-l-2 rounded-tl-xl' },
        { cls: 'top-1 right-1',  b: 'border-t-2 border-r-2 rounded-tr-xl' },
        { cls: 'bottom-1 left-1',  b: 'border-b-2 border-l-2 rounded-bl-xl' },
        { cls: 'bottom-1 right-1', b: 'border-b-2 border-r-2 rounded-br-xl' },
      ].map(({ cls, b }, i) => (
        <div key={i} className={`absolute w-6 h-6 z-20 pointer-events-none ${cls} ${b}`}
          style={{ borderColor: 'rgba(34,197,94,0.65)' }} aria-hidden="true" />
      ))}

      {/* Photo frame */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: 20,
          border: '1.5px solid rgba(34,197,94,0.38)',
          boxShadow: '0 0 0 1px rgba(34,197,94,0.08), 0 16px 56px rgba(0,0,0,0.75), 0 0 40px rgba(34,197,94,0.14)',
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 0 1px rgba(34,197,94,0.45), 0 20px 64px rgba(0,0,0,0.8), 0 0 56px rgba(34,197,94,0.22)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}>

        {!err ? (
          <img
            src="/images/tola-profile.png"
            alt="Tola Feyisa — Cybersecurity and Full-Stack Developer"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            onError={() => setErr(true)}
          />
        ) : (
          /* Fallback when image file is missing */
          <div className="w-full h-full flex flex-col items-center justify-center gap-4"
            style={{ background: 'linear-gradient(160deg,#0f1a18,#080e0d)' }}>
            <img src="/tf-logo.svg" alt="" aria-hidden="true" width={72} height={72} />
            <p className="text-slate-400 text-sm font-medium">Tola Feyisa</p>
          </div>
        )}

        {/* Subtle bottom fade so photo blends into dark bg */}
        <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(8,14,13,0.6), transparent)' }}
          aria-hidden="true" />
      </motion.div>

      {/* Floating identity badges — positioned INSIDE the 320×400 frame, no overflow */}
      <motion.div
        className="absolute z-30 px-2.5 py-1 rounded-full text-xs font-bold pointer-events-none whitespace-nowrap"
        style={{ right: -10, top: 48, background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true">
        Cybersecurity
      </motion.div>

      <motion.div
        className="absolute z-30 px-2.5 py-1 rounded-full text-xs font-bold pointer-events-none whitespace-nowrap"
        style={{ left: -10, top: 130, background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        aria-hidden="true">
        Full-Stack
      </motion.div>

      <motion.div
        className="absolute z-30 px-2.5 py-1 rounded-full text-xs font-bold pointer-events-none whitespace-nowrap"
        style={{ right: -10, bottom: 80, background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        aria-hidden="true">
        SIEM Dev
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────────── */
const techBadges = ['Cybersecurity', 'Full-Stack Dev', 'Ethical Hacking', 'SIEM'];

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100vh' }}
      aria-label="Hero — Tola Feyisa"
    >
      {/* ── Backgrounds ─────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 25% 45%, rgba(34,197,94,0.07), transparent 65%)' }}
        aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080e0d, transparent)' }}
        aria-hidden="true" />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: 80, paddingBottom: 48 }}>

        {/* Two-column grid: 55% left text / 45% right photo */}
        <div className="grid lg:grid-cols-[55%_45%] items-center gap-8 lg:gap-12">

          {/* ── LEFT COLUMN ────────────────────────────────────── */}
          <div className="flex flex-col">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6">
              <div className="status-badge w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                AVAILABLE FOR INTERNSHIPS &amp; OPPORTUNITIES
              </div>
            </motion.div>

            {/* Big headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="font-display font-extrabold uppercase leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}>
              <span className="gradient-text block">IDEAS INTO</span>
              <span className="gradient-text block">REALITY.</span>
              <span className="text-slate-100 block" style={{ marginTop: '0.15em' }}>SECURITY INTO</span>
              <span className="text-slate-100 block">
                EVERY <span className="gradient-text">LINE.</span>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="text-slate-400 text-base font-medium mb-3">
              Creative thinking meets secure engineering.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="text-slate-400 leading-relaxed mb-5 max-w-lg text-sm sm:text-base">
              I'm <span className="text-slate-200 font-semibold">Tola Feyisa</span>, a Computer
              Science student at{' '}
              <span className="text-green-400 font-semibold">Haramaya University</span> combining
              cybersecurity and full-stack development to build secure, practical, and innovative
              digital solutions.
            </motion.p>

            {/* Role bullets */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-col gap-1 mb-5">
              {['Cybersecurity Student','Full-Stack Developer','Security Researcher','SIEM Developer'].map((r) => (
                <div key={r} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{r}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-6">
              {techBadges.map((b) => (
                <span key={b} className="tech-badge">{b}</span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex flex-wrap gap-3 mb-6">
              <button onClick={() => go('contact')} className="btn-primary" aria-label="Hire Tola Feyisa">
                <Mail size={14} /> HIRE ME
              </button>
              <button onClick={() => go('projects')} className="btn-secondary" aria-label="View projects">
                VIEW MY PROJECTS <ArrowRight size={14} />
              </button>
              <a href="https://github.com/tola24234" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" aria-label="GitHub">
                <Github size={14} /> GITHUB
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 text-sm">
              <a href="https://github.com/tola24234" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 hover:text-green-400 transition-colors duration-200">
                <Github size={13} /> github.com/tola24234
              </a>
              <span className="text-slate-800">·</span>
              <span className="flex items-center gap-1.5 text-slate-700 cursor-not-allowed"
                title="LinkedIn coming soon">
                <Linkedin size={13} /> LinkedIn soon
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: photo (desktop) ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center">
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Mobile photo — appears below text on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:hidden flex justify-center mt-10">
          <div className="overflow-hidden rounded-2xl"
            style={{ width: 200, height: 240, border: '1.5px solid rgba(34,197,94,0.35)', boxShadow: '0 0 28px rgba(34,197,94,0.15)' }}>
            <img src="/images/tola-profile.png" alt="Tola Feyisa"
              className="w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col items-center mt-10 gap-1">
          <span className="text-slate-700 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={17} className="text-slate-700" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
