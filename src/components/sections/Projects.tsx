import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  const featured = projects.find((p) => p.id === 'mini-siem')!;
  const rest = projects.filter((p) => p.id !== 'mini-siem');

  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="container-max">
        <SectionTitle label="Projects" title="My Work"
          subtitle="Building practical solutions. Developing secure systems." />

        {/* Featured */}
        <motion.div className="mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-green-500/50 mb-5">
            — Featured —
          </p>
          <ProjectCard project={featured} index={0} featured />
        </motion.div>

        <div className="section-divider my-10" />

        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-6">
          Other Projects
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        <div className="text-center">
          <a href="https://github.com/tola24234" target="_blank" rel="noopener noreferrer"
            className="btn-secondary" aria-label="View all repositories on GitHub">
            <Github size={16} /> VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
