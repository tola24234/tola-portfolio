import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

const focusAreas = ['Cybersecurity', 'Networking', 'Operating Systems', 'Software Engineering', 'Database Systems', 'Algorithms'];

export function Education() {
  return (
    <section id="education" className="section-padding" aria-label="Education">
      <div className="container-max">
        <SectionTitle label="Education" title="Academic Background" />
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="glass-card-hover p-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(34,197,94,0.18)' }}>
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #22c55e 40%, #4ade80, transparent)' }}
                aria-hidden="true" />
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-[0.04]"
                style={{ background: 'radial-gradient(circle at top right, #22c55e, transparent)' }}
                aria-hidden="true" />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <GraduationCap size={30} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-100">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-green-400 font-semibold mt-1">Haramaya University</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide"
                      style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" /> In Progress
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-600" /> Expected Graduation: 2027
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-600" /> Haramaya, Ethiopia
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    Studying computer science fundamentals while applying academic knowledge through practical
                    programming, cybersecurity projects, and laboratory work.
                  </p>

                  <div>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-3">Areas of Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {focusAreas.map((a) => (
                        <span key={a} className="skill-badge">
                          <BookOpen size={11} className="text-slate-600" /> {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
