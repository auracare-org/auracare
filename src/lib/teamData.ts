export interface TeamMember {
  name: string;
  img?: string;
  role: string;
  linkedin?: string;
  website?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Hin Lun Chen',
    img: '/hinlinchen.jpg',
    role: 'Co-Founder, CEO & CFO',
    linkedin: 'https://www.linkedin.com/in/hin-lun-chen/'
  },
  {
    name: 'Stephen Okita',
    img: '/stephenokita.jpg',
    role: 'Co-Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/stephen-okita/',
    website: 'https://stephenokita.com'
  },
  {
    name: 'Nicholas Chae',
    img: '/nicholasche.jpg',
    role: 'Head of ML',
    linkedin: 'https://www.linkedin.com/in/nicholas-chae/'
  },
  {
    name: 'Linus Alpsten',
    img: '/linusalpsten.jpg',
    role: 'Head of Partnerships and Research',
    linkedin: 'https://www.linkedin.com/in/linus-alpsten-665b551b0/'
  },
  {
    name: 'Ahnaf Kabir',
    img: '/AhnafKabir.jpg',
    role: 'VP, Engineering',
    linkedin: 'https://www.linkedin.com/in/ahnaf-kabir/'
  },
  {
    name: 'Mini Han Wang',
    img: '/minhanwang.jpg',
    role: 'Medical Data Science Advisor',
    linkedin: 'https://www.linkedin.com/in/han-wang-mini/'
  },
  {
    name: 'Julius Chu',
    img: '/juliuschu.jpg',
    role: 'Product & Marketing Advisor',
    linkedin: 'https://www.linkedin.com/in/juliuschu/'
  },
  {
    name: 'Daryna Nykyforiv',
    img: '/DarynaNykyforiv.jpg',
    role: 'Partnerships',
    linkedin: 'https://www.linkedin.com/in/daryna-nykyforiv-55b352364/'
  },
  {
    name: 'Ayza Zainal',
    role: 'Freelance UI/UX Designer'
  },
  {
    name: 'Lu',
    role: 'Hardware Engineering Lead'
  }
];

// Helper function to get team member by name
export function getTeamMember(name: string): TeamMember | undefined {
  // Normalize names for matching (handle variations like "Hin Lun Chen" vs "Hinlun Chen")
  const normalizedName = name.toLowerCase().replace(/\s+/g, '');
  return teamMembers.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '') === normalizedName
  );
}

// Helper function to get team member initials
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}
