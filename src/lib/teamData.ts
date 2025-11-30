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
    img: '/JPG/hinlinchen.jpg',
    role: 'Co-Founder, CEO & CFO',
    linkedin: 'https://www.linkedin.com/in/hin-lun-chen/'
  },
  {
    name: 'Stephen Okita',
    img: '/JPG/stephenokita.jpg',
    role: 'Co-Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/stephen-okita/',
    website: 'https://stephenokita.com'
  },
  {
    name: 'Nicholas Chae',
    img: '/JPG/nicholasche.jpg',
    role: 'Head of ML',
    linkedin: 'https://www.linkedin.com/in/nicholas-chae/'
  },
  {
    name: 'Linus Alpsten',
    img: '/JPG/linusalpsten.jpg',
    role: 'Head of Partnerships & Research',
    linkedin: 'https://www.linkedin.com/in/linus-alpsten-665b551b0/'
  },
  {
    name: 'Ahnaf Kabir',
    img: '/JPG/AhnafKabir.jpg',
    role: 'VP, Engineering',
    linkedin: 'https://www.linkedin.com/in/akn101',
    website: 'https://akn.me.uk'
  },
  {
    name: 'Mini Han Wang',
    img: '/JPG/minhanwang.jpg',
    role: 'Medical Data Science Advisor',
    linkedin: 'https://www.linkedin.com/in/han-wang-mini/'
  },
  {
    name: 'Julius Chu',
    img: '/JPG/juliuschu.jpg',
    role: 'Product & Marketing Advisor',
    linkedin: 'https://www.linkedin.com/in/juliuschu/'
  },
  {
    name: 'Ayza Zainal',
    img: '/JPG/AyzaZainal.jpg',
    role: 'Freelance UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/ayzazainal/'
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
