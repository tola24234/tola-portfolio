import { useState, type FormEvent } from 'react';
import { Mail, Github, Phone, Send, CheckCircle, AlertCircle, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedSection } from '../ui/AnimatedSection';

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = 'Name is required.';
  else if (d.name.trim().length < 2) e.name = 'Name must be at least 2 characters.';
  if (!d.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email address.';
  if (!d.subject.trim()) e.subject = 'Subject is required.';
  else if (d.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters.';
  if (!d.message.trim()) e.message = 'Message is required.';
  else if (d.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
  return e;
}

const contactInfo = [
  { icon: Mail,   label: 'Email',    value: 'tolaf3364@gmail.com',        href: 'mailto:tolaf3364@gmail.com'        },
  { icon: Github, label: 'GitHub',   value: 'github.com/tola24234',       href: 'https://github.com/tola24234'      },
  { icon: Phone,  label: 'Phone',    value: '+251 935 339 172',            href: 'tel:+251935339172'                 },
  { icon: MapPin, label: 'Location', value: 'Ethiopia',                   href: null                                },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors,   setErrors]   = useState<FormErrors>({});
  const [touched,  setTouched]  = useState<Record<string, boolean>>({});
  const [status,   setStatus]   = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      const ne = validate({ ...formData, [name]: value });
      setErrors((p) => ({ ...p, [name]: ne[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    const ne = validate(formData);
    setErrors((p) => ({ ...p, [name]: ne[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const ne = validate(formData);
    setErrors(ne);
    if (Object.keys(ne).length > 0) return;
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/tolaf3364@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `Portfolio Contact: ${formData.subject}`, _template: 'table' }),
      });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', subject: '', message: '' }); setTouched({}); setErrors({}); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputCls = (field: keyof FormErrors) =>
    `w-full rounded-xl px-4 py-3 text-slate-200 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 placeholder-slate-600 ${
      touched[field] && errors[field]
        ? 'border border-red-500/60 focus:ring-red-500/30 bg-red-500/4'
        : 'border border-green-500/15 hover:border-green-500/30 focus:border-green-500/50 focus:ring-green-500/15 bg-white/[0.04]'
    }`;

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(8,14,13,0.7)' }} aria-label="Contact Tola Feyisa">
      <div className="container-max">
        <SectionTitle label="Contact" title="Let's Build Something Secure."
          subtitle="Open to internships, cybersecurity roles, freelance projects, and professional collaboration." />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="space-y-5">
              <p className="text-slate-400 leading-relaxed">
                Whether you have an opportunity, a project, or just want to connect — feel free to reach out.
                I'll respond as promptly as possible.
              </p>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="glass-card p-4 flex items-center gap-4 group"
                    style={{ border: '1px solid rgba(34,197,94,0.1)' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.18)' }}>
                      <Icon size={17} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-200 text-sm hover:text-green-400 transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-200 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
                {/* LinkedIn placeholder */}
                <div className="glass-card p-4 flex items-center gap-4 opacity-40"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={17} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">LinkedIn</p>
                    <p className="text-slate-500 text-sm">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.15}>
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                style={{ border: '1px solid rgba(34,197,94,0.2)' }}>
                <CheckCircle size={52} className="text-green-400 mb-5" />
                <h3 className="text-slate-100 font-display font-bold text-xl mb-3 uppercase">Message Sent!</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form"
                className="glass-card p-7 space-y-5"
                style={{ border: '1px solid rgba(34,197,94,0.12)' }}>
                <h3 className="text-slate-200 font-bold uppercase tracking-wide text-sm">Send a Message</h3>

                {[
                  { id: 'name',    label: 'Full Name',      type: 'text',  auto: 'name',  ph: 'Your full name'         },
                  { id: 'email',   label: 'Email Address',  type: 'email', auto: 'email', ph: 'your@email.com'          },
                  { id: 'subject', label: 'Subject',        type: 'text',  auto: 'off',   ph: 'What is this regarding?' },
                ].map(({ id, label, type, auto, ph }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1.5">
                      {label} <span className="text-red-400">*</span>
                    </label>
                    <input type={type} id={id} name={id}
                      value={formData[id as keyof FormData]}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder={ph} autoComplete={auto}
                      className={inputCls(id as keyof FormErrors)}
                      aria-required="true"
                      aria-describedby={errors[id as keyof FormErrors] ? `${id}-error` : undefined} />
                    {touched[id] && errors[id as keyof FormErrors] && (
                      <p id={`${id}-error`} className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors[id as keyof FormErrors]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea id="message" name="message" value={formData.message}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Write your message here..." rows={5}
                    className={`${inputCls('message')} resize-none`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined} />
                  {touched.message && errors.message && (
                    <p id="message-error" className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5' }}>
                    <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                    Something went wrong. Please email directly at tolaf3364@gmail.com.
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {status === 'submitting' ? (
                    <>
                      <motion.div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                      SENDING...
                    </>
                  ) : (
                    <><Send size={15} /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
