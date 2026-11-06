import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ label, title, subtitle, align = 'center' }: SectionTitleProps) {
  const center = align === 'center';
  return (
    <motion.div
      className={`flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'} mb-14`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-label">{label}</span>
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 leading-tight uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-0.5 w-16 ${center ? 'mx-auto' : ''}`}
        style={{ background: 'linear-gradient(90deg, #22c55e, #4ade80)' }}
      />
    </motion.div>
  );
}
