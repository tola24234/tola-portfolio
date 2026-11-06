export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 'cisco-cyber',
    title: 'Cybersecurity and Ethical Hacking',
    issuer: 'Cisco Networking Academy',
    description:
      'Foundations of cybersecurity, ethical hacking methodologies, network security principles, and threat analysis.',
    icon: 'Shield',
  },
  {
    id: 'ethio-web',
    title: 'Web Programming',
    issuer: 'Ethio Coder',
    description:
      'Full-stack web development fundamentals including HTML, CSS, JavaScript, and backend integration.',
    icon: 'Code2',
  },
];
