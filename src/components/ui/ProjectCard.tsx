import { motion } from 'framer-motion';
import { Github, Construction, ArrowRight, ExternalLink, Star } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const isPlaceholder = project.status === 'placeholder';

  if (featured) {
    return (
      <motion.div
        className="glass-card-hover relative overflow-hidden"
        style={{ border: '1px solid rgba(34,197,94,0.22)' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
      >
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #22c55e 40%, #4ade80, transparent)' }}
          aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-[0.03]"
          style={{ background: 'radial-gradient(circle at top right, #22c55e, transparent)' }}
          aria-hidden="true" />

        <div className="grid md:grid-cols-2 gap-0">
          {/* Info */}
          <div className="p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80' }}>
                <Star size={10} fill="currentColor" /> Featured Project
              </span>
              <span className="tech-badge">{project.category}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-100 mb-3 uppercase tracking-tight">{project.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-5 flex-1">{project.longDescription}</p>
            <ul className="space-y-2 mb-6">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <ArrowRight size={12} className="text-green-500 mt-0.5 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((t) => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <div className="flex gap-3 flex-wrap">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-xs px-5 py-2.5"
                  aria-label={`View ${project.title} on GitHub`}>
                  <Github size={14} /> VIEW ON GITHUB
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary text-xs px-5 py-2.5"
                  aria-label={`Live demo of ${project.title}`}>
                  <ExternalLink size={14} /> LIVE DEMO
                </a>
              )}
            </div>
          </div>

          {/* Visual */}
          <div className="flex items-center justify-center p-8 border-l"
            style={{ borderColor: 'rgba(34,197,94,0.1)' }}>
            {project.screenshot ? (
              <img src={project.screenshot} alt={`${project.title} screenshot`}
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: 280, border: '1px solid rgba(34,197,94,0.2)' }} />
            ) : (
              <div className="w-full h-56 rounded-xl flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.05), rgba(34,197,94,0.02))', border: '1px dashed rgba(34,197,94,0.2)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <Github size={28} className="text-green-400" />
                </div>
                <p className="text-slate-500 text-sm">View on GitHub</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  /* Standard card */
  return (
    <motion.div
      className="glass-card-hover flex flex-col h-full relative overflow-hidden group"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #22c55e, transparent)' }}
        aria-hidden="true" />

      <div className={`h-32 rounded-t-2xl flex items-center justify-center border-b`}
        style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.04), rgba(34,197,94,0.02))', borderColor: 'rgba(34,197,94,0.08)' }}>
        <div className="bg-grid absolute inset-0 rounded-t-2xl opacity-20" aria-hidden="true" />
        <div className="w-10 h-10 rounded-xl flex items-center justify-center z-10 opacity-40"
          style={{ background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.35)' }}>
          <Github size={20} className="text-green-400" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="tech-badge">{project.category}</span>
          {isPlaceholder && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold uppercase"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24' }}>
              <Construction size={10} /> In Progress
            </span>
          )}
        </div>

        <h3 className="text-sm font-display font-bold text-slate-100 mb-2 leading-snug group-hover:text-green-300 transition-colors duration-200 uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        {!isPlaceholder && (
          <ul className="mb-4 space-y-1">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-slate-400 text-xs">
                <ArrowRight size={10} className="text-green-500 mt-0.5 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((t) => <span key={t} className="tech-badge">{t}</span>)}
        </div>

        <div className="flex items-center gap-2 mt-auto flex-wrap">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: '#94a3b8' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,197,94,0.4)'; (e.currentTarget as HTMLElement).style.color = '#4ade80'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
              aria-label={`View ${project.title} on GitHub`}>
              <Github size={12} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-600 cursor-not-allowed uppercase"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Github size={12} /> Coming Soon
            </span>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-200"
              style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', color: '#4ade80' }}
              aria-label={`Live demo of ${project.title}`}>
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
