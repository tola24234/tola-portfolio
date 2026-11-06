import { Github, Mail, Phone } from 'lucide-react';

const footerLinks = [
  { label: 'Home',     href: '#home'          },
  { label: 'About',    href: '#about'         },
  { label: 'Skills',   href: '#skills'        },
  { label: 'Projects', href: '#projects'      },
  { label: 'Contact',  href: '#contact'       },
];

export function Footer() {
  const go = (href: string) => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid rgba(34,197,94,0.1)', background: 'rgba(8,14,13,0.95)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/tf-logo.svg" alt="TF Logo" width={36} height={36} />
              <span className="font-display font-bold text-slate-100 text-sm tracking-wider">
                TOLA<span className="gradient-text">.</span>FEYISA
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Cybersecurity Student · Full-Stack Developer
              <br />Ethiopia
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                    className="text-slate-500 text-sm hover:text-green-400 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-2.5">
              {[
                { icon: Mail,   text: 'tolaf3364@gmail.com',  href: 'mailto:tolaf3364@gmail.com'   },
                { icon: Github, text: 'github.com/tola24234', href: 'https://github.com/tola24234' },
                { icon: Phone,  text: '+251 935 339 172',     href: 'tel:+251935339172'             },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 text-slate-500 text-sm hover:text-green-400 transition-colors duration-200">
                  <Icon size={14} /> {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)' }} />
        <p className="text-slate-600 text-xs text-center">
          © {year} Tola Feyisa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
