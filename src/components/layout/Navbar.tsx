import { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const primaryLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Education',  href: '#education'  },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#internship' },
  { label: 'Contact',    href: '#contact'    },
];

const moreLinks = [
  { label: 'Certifications', href: '#certifications' },
  { label: 'Volunteering',   href: '#volunteer'      },
];

const allLinks = [...primaryLinks, ...moreLinks];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen,   setMoreOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [active,     setActive]     = useState('home');
  const moreRef = useRef<HTMLLIElement>(null);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const ids = allLinks.map((l) => l.href.slice(1));
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActive(ids[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const go = useCallback((href: string) => {
    setMobileOpen(false);
    setMoreOpen(false);
    const id = href.startsWith('#') ? href.slice(1) : href;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const isMoreActive = moreLinks.some((l) => active === l.href.slice(1));

  /* shared link style helper */
  const linkCls = (isActive: boolean) =>
    [
      'relative px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase',
      'transition-colors duration-200 whitespace-nowrap rounded-md',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60',
      isActive ? 'text-green-400' : 'text-slate-400 hover:text-white',
    ].join(' ');

  return (
    <header
      role="banner"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { background: 'rgba(8,14,13,0.94)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(34,197,94,0.13)', boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }
          : { background: 'rgba(8,14,13,0.7)',  backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }
      }
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
        {/* ── ONE ROW: logo | links | hire-me | hamburger ─────────── */}
        <div className="flex flex-row items-center justify-between" style={{ height: 60 }}>

          {/* LEFT — logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go('#home'); }}
            className="flex items-center gap-2 flex-shrink-0 group"
            aria-label="Tola Feyisa — home"
          >
            <img src="/tf-logo.svg" alt="" aria-hidden="true" width={28} height={28}
              className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-white text-sm tracking-wider whitespace-nowrap">
              TOLA<span className="gradient-text">.</span>FEYISA
            </span>
          </a>

          {/* CENTER — horizontal links (md 768px and up) */}
          <ul role="list"
            className="hidden md:flex flex-row items-center flex-1 justify-center"
            style={{ gap: 0 }}>
            {primaryLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a href={link.href}
                    onClick={(e) => { e.preventDefault(); go(link.href); }}
                    aria-current={isActive ? 'page' : undefined}
                    className={linkCls(isActive)}>
                    {link.label}
                    {isActive && (
                      <motion.span layoutId="nav-underline"
                        className="absolute bottom-0 left-1.5 right-1.5 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg,#22c55e,#4ade80)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                    )}
                  </a>
                </li>
              );
            })}

            {/* MORE dropdown */}
            <li ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={moreOpen}
                className={[linkCls(isMoreActive), 'flex items-center gap-1'].join(' ')}>
                More
                <ChevronDown size={12}
                  className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                {isMoreActive && (
                  <motion.span layoutId="nav-underline"
                    className="absolute bottom-0 left-1.5 right-1.5 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#22c55e,#4ade80)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    role="menu"
                    className="absolute left-0 top-full mt-1 min-w-[170px] rounded-xl overflow-hidden"
                    style={{ background: 'rgba(8,14,13,0.98)', border: '1px solid rgba(34,197,94,0.18)', boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
                    {moreLinks.map((link) => {
                      const id = link.href.slice(1);
                      const isActive = active === id;
                      return (
                        <li key={link.href} role="none">
                          <a href={link.href}
                            onClick={(e) => { e.preventDefault(); go(link.href); }}
                            role="menuitem"
                            aria-current={isActive ? 'page' : undefined}
                            className={[
                              'flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider',
                              'transition-colors duration-150',
                              isActive
                                ? 'text-green-400 bg-green-500/10'
                                : 'text-slate-400 hover:text-white hover:bg-white/5',
                            ].join(' ')}>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />}
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* RIGHT — hire me + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Hire Me — always visible on md+ */}
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); go('#contact'); }}
              aria-label="Hire Me"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest text-black transition-all duration-200 hover:brightness-110 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              style={{ background: 'linear-gradient(135deg,#22c55e,#4ade80)', boxShadow: '0 3px 14px rgba(34,197,94,0.4)' }}>
              HIRE ME
            </a>

            {/* Hamburger — only on mobile (below md) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu (below md only) ────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(8,14,13,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(34,197,94,0.14)' }}>
            <ul role="list" className="px-4 pt-2 pb-4 space-y-1">
              {allLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a href={link.href}
                      onClick={(e) => { e.preventDefault(); go(link.href); }}
                      aria-current={isActive ? 'page' : undefined}
                      className={[
                        'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-200',
                        isActive
                          ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                          : 'text-slate-400 hover:text-white hover:bg-white/5',
                      ].join(' ')}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-green-400' : 'bg-transparent'}`} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a href="#contact"
                  onClick={(e) => { e.preventDefault(); go('#contact'); }}
                  className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-black uppercase tracking-widest text-black"
                  style={{ background: 'linear-gradient(135deg,#22c55e,#4ade80)', boxShadow: '0 4px 16px rgba(34,197,94,0.35)' }}>
                  HIRE ME
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
