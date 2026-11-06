export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'cybersecurity', label: 'Cybersecurity', icon: 'Shield',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment', 'Security Auditing', 'SIEM Development', 'Log Analysis', 'Threat Detection', 'OWASP Top 10'],
  },
  {
    id: 'frontend', label: 'Frontend', icon: 'Monitor',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    id: 'backend', label: 'Backend', icon: 'Cpu',
    skills: ['Python', 'Flask', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    id: 'database', label: 'Databases', icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    id: 'devops', label: 'DevOps & Tools', icon: 'GitBranch',
    skills: ['Linux', 'Docker', 'Git', 'GitHub', 'Bash', 'Networking', 'TCP/IP'],
  },
  {
    id: 'sectools', label: 'Security Tools', icon: 'Terminal',
    skills: ['Nmap', 'Burp Suite', 'Wireshark', 'OpenVAS', 'Nikto', 'OWASP ZAP'],
  },
];
