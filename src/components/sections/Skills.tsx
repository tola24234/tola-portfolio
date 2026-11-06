import { useState } from 'react';
import { Shield, Terminal, Monitor, Cpu, Database, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Terminal, Monitor, Cpu, Database, GitBranch,
};

export function Skills() {
  const [active, setActive] = useState('cybersecurity');
  const cat = skillCategories.find((c) => c.id === active);

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(8,14,13,0.5)' }} aria-label="Technical skills">
      <div className="container-max">
        <SectionTitle label="Technical Skills" title="Skills & Expertise"
          subtitle="Cybersecurity and full-stack development skills built through projects, labs, and internship training." />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
          {skillCategories.map((c) => {
            const Icon = iconMap[c.icon];
            const isActive = c.id === active;
            return (
              <button key={c.id} role="tab" aria-selected={isActive} aria-controls={`skills-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? 'text-green-400 border-green-500/40 bg-green-500/8'
                    : 'text-slate-400 border-white/8 bg-white/3 hover:text-slate-200 hover:border-green-500/20'
                }`}>
                <Icon size={14} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Skills panel */}
        <div className="max-w-3xl mx-auto mb-14">
          <AnimatePresence mode="wait">
            {cat && (
              <motion.div key={active} id={`skills-${active}`} role="tabpanel"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-8"
                style={{ border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="flex items-center gap-3 mb-6">
                  {(() => { const Icon = iconMap[cat.icon]; return (
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                      <Icon size={18} className="text-green-400" />
                    </div>
                  ); })()}
                  <div>
                    <h3 className="text-lg font-display font-bold text-slate-200 uppercase tracking-tight">{cat.label}</h3>
                    <p className="text-slate-500 text-xs">{cat.skills.length} skills</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <motion.span key={skill}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                      style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.18)', color: '#86efac' }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.16, delay: i * 0.03 }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.14)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.35)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(34,197,94,0.07)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.18)'; }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Overview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {skillCategories.map((c, idx) => {
            const Icon = iconMap[c.icon];
            const isActive = c.id === active;
            return (
              <motion.button key={c.id}
                onClick={() => setActive(c.id)}
                className="glass-card p-4 text-center cursor-pointer transition-all duration-200"
                style={isActive ? { border: '1px solid rgba(34,197,94,0.4)', background: 'rgba(34,197,94,0.06)' } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                aria-label={`View ${c.label} skills`}>
                <Icon size={20} className={`mx-auto mb-2 ${isActive ? 'text-green-400' : 'text-slate-500'}`} />
                <p className={`text-xs font-bold uppercase tracking-tight ${isActive ? 'text-green-400' : 'text-slate-500'}`}>
                  {c.label}
                </p>
                <p className="text-slate-600 text-xs mt-0.5">{c.skills.length}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
