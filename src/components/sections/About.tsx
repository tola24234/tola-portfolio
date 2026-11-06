import { motion } from 'framer-motion';
import { BookOpen, MapPin, Shield, Code2, Layers, User } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

const cards = [
  { icon: BookOpen, label: 'Degree',     value: 'BSc Computer Science',     sub: 'Haramaya University · 2027' },
  { icon: Shield,   label: 'Security',   value: 'Cybersecurity Focus',       sub: 'Ethical Hacking · Pen Testing · SIEM' },
  { icon: Code2,    label: 'Dev',        value: 'Full-Stack Focus',          sub: 'React · Flask · Node.js · REST APIs' },
  { icon: MapPin,   label: 'Location',   value: 'Ethiopia',                  sub: 'Available Remotely' },
  { icon: User,     label: 'Status',     value: 'Open to Opportunities',     sub: 'Internships · Junior Roles · Freelance' },
];

const strengths = [
  { icon: Shield, title: 'Security-First Thinking',      desc: 'I approach development with security in mind, including input validation, authentication, and OWASP security practices.' },
  { icon: Layers, title: 'Full-Stack Capability',         desc: 'Building end-to-end applications using React, TypeScript, Python, Flask, Node.js, Express, and relational databases.' },
  { icon: Code2,  title: 'Secure Application Development', desc: 'Combining cybersecurity knowledge with software engineering to create functional, maintainable, and resilient applications.' },
];

export function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'rgba(8,14,13,0.7)' }} aria-label="About Tola Feyisa">
      <div className="container-max">
        <SectionTitle label="About Me" title="Who I Am"
          subtitle="Bridging Cybersecurity and Software Engineering." />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Text */}
          <AnimatedSection direction="left">
            <div className="space-y-5 text-slate-400 leading-relaxed text-left">
              <p>
                I'm <strong className="text-slate-200">Tola Feyisa</strong>, a Computer Science student
                at <strong className="text-green-400">Haramaya University</strong>, Ethiopia. My work sits
                at the intersection of cybersecurity and full-stack software development — I build systems and I secure them.
              </p>
              <p>
                On the <strong className="text-slate-300">cybersecurity side</strong>, I focus on ethical hacking, penetration
                testing, cyber audit, and security monitoring. I completed practical training at{' '}
                <strong className="text-slate-300">INSA (Cyber Audit Department)</strong> and work with tools including
                Nmap, Burp Suite, Wireshark, and OpenVAS.
              </p>
              <p>
                On the <strong className="text-slate-300">development side</strong>, I build full-stack web applications
                using React + TypeScript on the frontend, Python/Flask or Node.js/Express on the backend, and MySQL,
                PostgreSQL, or SQLite for data storage.
              </p>
              <p>
                My Mini-SIEM project demonstrates both strengths: a Python/Flask application that monitors Linux
                authentication logs and detects SSH brute-force attacks through a real-time dashboard.
              </p>
              <div className="pt-2">
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-3">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['Afaan Oromo', 'Amharic', 'English'].map((l) => (
                    <span key={l} className="skill-badge">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stat cards */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-3">
              {cards.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.22)' }}>
                    <Icon size={18} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-slate-200 font-semibold text-sm">{value}</p>
                    <p className="text-slate-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Strength cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {strengths.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title}
              className="glass-card-hover p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.22)' }}>
                <Icon size={22} className="text-green-400" />
              </div>
              <h3 className="text-slate-200 font-display font-bold text-base mb-2 uppercase tracking-tight">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
