export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;       // optional live demo link
  screenshot?: string;    // optional path relative to /public
  status: 'live' | 'placeholder';
  category: string;
  type: 'security' | 'fullstack' | 'utility';
}

export const projects: Project[] = [
  {
    id: 'mini-siem',
    title: 'Mini-SIEM Security Monitoring System',
    description:
      'A lightweight Python-based SIEM system for security log collection, analysis, monitoring, and SSH brute-force detection.',
    longDescription:
      'Developed a lightweight Python-based SIEM project for security log collection, analysis, monitoring, and SSH brute-force detection. Features a Flask-powered web dashboard for real-time event visualization and MITRE ATT&CK framework mapping.',
    features: [
      'Linux authentication log monitoring',
      'SSH brute-force detection',
      'Security alert generation',
      'Flask web dashboard',
      'Security event visualization',
      'MITRE ATT&CK mapping',
    ],
    technologies: ['Python', 'Flask', 'Linux', 'SQLite', 'MITRE ATT&CK'],
    githubUrl: 'https://github.com/tola24234/mini-siem',
    status: 'live',
    category: 'Security Monitoring',
    type: 'security',
  },
  {
    id: 'log-analysis',
    title: 'Security Log Analysis Project',
    description:
      'Analyzed authentication logs and developed detection rules to identify suspicious activities and potential security threats.',
    longDescription:
      'A project focused on parsing and analyzing Linux authentication logs to surface suspicious activities. Developed custom detection rules for identifying failed login patterns, privilege escalation attempts, and abnormal access times.',
    features: [
      'Authentication log parsing',
      'Suspicious activity detection rules',
      'Failed login pattern analysis',
      'Privilege escalation detection',
      'Report generation',
    ],
    technologies: ['Python', 'Linux', 'Bash', 'Regular Expressions'],
    status: 'live',
    category: 'Log Analysis',
    type: 'security',
  },
  {
    id: 'vuln-scanner',
    title: 'Mini Vulnerability Scanner',
    description:
      'A lightweight vulnerability scanner for identifying common security misconfigurations in web applications and network services.',
    longDescription:
      'A Python-based vulnerability scanner targeting common web application and network service misconfigurations. Implementation in progress — full details will be added upon project completion.',
    features: [
      'Port scanning',
      'Service enumeration',
      'Common vulnerability checks',
      'Report output',
    ],
    technologies: ['Python', 'Nmap', 'Linux'],
    status: 'placeholder',
    category: 'Vulnerability Assessment',
    type: 'security',
  },
  {
    id: 'password-checker',
    title: 'Password Strength Checker',
    description:
      'A web-based tool that evaluates password strength against common security criteria and provides actionable improvement suggestions.',
    longDescription:
      'A simple but practical security utility that checks passwords against entropy, common patterns, dictionary words, and OWASP recommendations. Implementation in progress.',
    features: [
      'Entropy calculation',
      'Common pattern detection',
      'OWASP compliance check',
      'Real-time feedback',
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    status: 'placeholder',
    category: 'Security Utility',
    type: 'utility',
  },
];
