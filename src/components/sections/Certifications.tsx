import { Shield, Code2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { certifications } from '../../data/certifications';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { Shield, Code2 };

export function Certifications() {
  return (
    <section id="certifications" className="section-padding" aria-label="Certifications">
      <div className="container-max">
        <SectionTitle label="Certifications" title="Certifications & Credentials"
          subtitle="Professional certifications from recognized technology and cybersecurity programs." />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Shield;
            return (
              <motion.div key={cert.id}
                className="glass-card-hover p-7 relative overflow-hidden group"
                style={{ border: '1px solid rgba(34,197,94,0.15)' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, #22c55e, transparent)' }}
                  aria-hidden="true" />
                <Award size={70} className="absolute -right-3 -top-3 text-green-500/5 group-hover:text-green-500/10 transition-colors duration-300"
                  aria-hidden="true" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <Icon size={22} className="text-green-400" />
                  </div>
                  <h3 className="text-slate-100 font-display font-bold text-base mb-1.5 uppercase tracking-tight group-hover:text-green-300 transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-green-400 text-sm font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
