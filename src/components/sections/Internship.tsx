import { Briefcase, Calendar, CheckCircle2, Wrench, AlertTriangle } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

const timeline = [
  { phase: 'Phase 1', duration: '1 Month', title: 'Cybersecurity Training',
    desc: 'Completed structured cybersecurity training covering ethical hacking methodologies, vulnerability assessment principles, security auditing frameworks, and laboratory safety practices.' },
  { phase: 'Phase 2', duration: '2 Months', title: 'Practical Laboratory Testing',
    desc: 'Conducted authorized security assessments in a controlled laboratory environment. Applied penetration-testing methodologies, worked with security assessment tools, and analyzed security findings in an authorized testing context.' },
];

const activities = [
  'Conducted authorized security assessments in a controlled laboratory environment',
  'Practiced penetration-testing methodologies and techniques',
  'Analyzed potential vulnerabilities and security risks',
  'Worked with cybersecurity assessment tools and platforms',
  'Developed practical knowledge of vulnerability assessment workflows',
  'Studied security findings and remediation approaches',
];

const tools = ['Nmap', 'Nikto', 'OpenVAS', 'Cybersecurity Assessment Tools'];

export function Internship() {
  return (
    <section id="internship" className="section-padding" style={{ background: 'rgba(8,14,13,0.6)' }} aria-label="Internship at INSA">
      <div className="container-max">
        <SectionTitle label="Experience" title="Professional Experience"
          subtitle="Cybersecurity training and practical laboratory experience at the Information Network Security Agency." />

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card-hover p-8 mb-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(34,197,94,0.18)' }}>
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #22c55e 40%, #4ade80, transparent)' }}
                aria-hidden="true" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <Briefcase size={24} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-100 uppercase tracking-tight">Cybersecurity Internship</h3>
                      <p className="text-green-400 font-semibold mt-0.5">INSA — Cyber Audit Department</p>
                      <p className="text-slate-500 text-sm mt-0.5">Cybersecurity and Penetration Testing Track · Ethiopia</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide"
                      style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80' }}>
                      <Calendar size={12} /> 3 Months Total
                    </span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 rounded-xl mb-6"
                style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)' }}>
                <AlertTriangle size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  All activities were conducted in an authorized laboratory environment as part of an official internship program.
                  No confidential targets, systems, or sensitive findings are disclosed.
                </p>
              </div>

              {/* Activities */}
              <div className="mb-6">
                <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-400" /> Key Activities
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {activities.map((a, i) => (
                    <motion.li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm"
                      initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Wrench size={14} className="text-green-400" /> Tools &amp; Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.15}>
            <h3 className="text-slate-300 font-bold text-sm uppercase tracking-widest mb-6 text-center">Program Timeline</h3>
            <div className="relative">
              <div className="absolute left-6 top-6 bottom-6 w-px"
                style={{ background: 'linear-gradient(to bottom, #22c55e, #4ade80, transparent)' }}
                aria-hidden="true" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div key={item.phase} className="relative pl-14"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}>
                    <div className="absolute left-3.5 top-3.5 w-5 h-5 rounded-full border-2 border-green-500 bg-green-500/20 flex items-center justify-center"
                      aria-hidden="true">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="glass-card p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div>
                          <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{item.phase}</span>
                          <h4 className="text-slate-200 font-semibold mt-0.5">{item.title}</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase"
                          style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80' }}>
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
