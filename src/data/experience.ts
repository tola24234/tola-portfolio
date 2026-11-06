export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  description: string;
  icon: string;
}

export const volunteerExperience: VolunteerItem[] = [
  {
    id: 'cyber-awareness',
    role: 'Technology & Cybersecurity Awareness Volunteer',
    organization: 'Community Outreach',
    description:
      'Conducted cybersecurity awareness sessions and promoted digital literacy among students and community members. Covered topics including safe browsing, phishing prevention, and password security.',
    icon: 'Megaphone',
  },
  {
    id: 'hs-mentor',
    role: 'High School Technology Mentor',
    organization: 'Secondary School Outreach',
    description:
      'Taught technology fundamentals to high school students and encouraged interest in cybersecurity and computer science careers. Introduced basic programming concepts and digital safety practices.',
    icon: 'GraduationCap',
  },
];
