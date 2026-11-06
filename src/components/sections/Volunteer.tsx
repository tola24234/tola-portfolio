import { Megaphone, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { volunteerExperience } from '../../data/experience';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { Megaphone, GraduationCap };

export function Volunteer() {
  return (
    <section id="volunteer" className="section-padding" style={{ background: 'rgba(8,14,13,0.5)' }} aria-label="Volunteer experience">
      <div className="container-max">
        <SectionTitle label="Volunteer" title="Giving Back"
          subtitle="Sharing knowledge and encouraging the next generation of technology and cybersecurity professionals." />

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-7 top-8 bottom-8 w-px"
            style={{ background: 'linear-gradient(to bottom, #22c55e, #4ade80, transparent)' }}
            aria-hidden="true" />
          <div className="space-y-8">
            {volunteerExperience.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Megaphone;
              return (
                <motion.div key={item.id} className="relative pl-16"
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: i * 0.15 }}>
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: '#0f1a18', border: '1px solid rgba(34,197,94,0.15)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.22)' }}>
                      <Icon size={18} className="text-green-400" />
                    </div>
                  </div>
                  <div className="glass-card-hover p-6">
                    <h3 className="text-slate-100 font-display font-bold text-base mb-1 uppercase tracking-tight">{item.role}</h3>
                    <p className="text-green-400 text-sm font-semibold mb-3">{item.organization}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
