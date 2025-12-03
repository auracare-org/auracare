export interface TeamMember {
  id: string;
  name: string;
  img?: string;
  role: string;
  linkedin?: string;
  website?: string;
}

export const team: Record<string, TeamMember> = {
  'hin-lun-chen': {
    id: 'hin-lun-chen',
    name: 'Hin Lun Chen',
    img: '/JPG/hinlinchen.jpg',
    role: 'Co-Founder, CEO & CFO',
    linkedin: 'https://www.linkedin.com/in/hin-lun-chen/'
  },
  'stephen-okita': {
    id: 'stephen-okita',
    name: 'Stephen Okita',
    img: '/JPG/stephenokita.jpg',
    role: 'Co-Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/stephen-okita/',
    website: 'https://stephenokita.com'
  },
  'nicholas-chae': {
    id: 'nicholas-chae',
    name: 'Nicholas Chae',
    img: '/JPG/nicholasche.jpg',
    role: 'Head of ML',
    linkedin: 'https://www.linkedin.com/in/nicholas-chae/'
  },
  'linus-alpsten': {
    id: 'linus-alpsten',
    name: 'Linus Alpsten',
    img: '/JPG/linusalpsten.jpg',
    role: 'Head of Partnerships & Research',
    linkedin: 'https://www.linkedin.com/in/linus-alpsten-665b551b0/'
  },
  'ahnaf-kabir': {
    id: 'ahnaf-kabir',
    name: 'Ahnaf Kabir',
    img: '/JPG/AhnafKabir.jpg',
    role: 'VP, Engineering',
    linkedin: 'https://www.linkedin.com/in/akn101',
    website: 'https://akn.me.uk'
  },
  'mini-han-wang': {
    id: 'mini-han-wang',
    name: 'Mini Han Wang',
    img: '/JPG/minhanwang.jpg',
    role: 'Medical Data Science Advisor',
    linkedin: 'https://www.linkedin.com/in/han-wang-mini/'
  },
  'julius-chu': {
    id: 'julius-chu',
    name: 'Julius Chu',
    img: '/JPG/juliuschu.jpg',
    role: 'Product & Marketing Advisor',
    linkedin: 'https://www.linkedin.com/in/juliuschu/'
  },
  'ayza-zainal': {
    id: 'ayza-zainal',
    name: 'Ayza Zainal',
    img: '/JPG/AyzaZainal.jpg',
    role: 'Freelance UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/ayzazainal/'
  },
  'lu': {
    id: 'lu',
    name: 'Lu',
    role: 'Hardware Engineering Lead'
  }
};

// Array version for iteration (e.g., on About page)
export const teamList: TeamMember[] = Object.values(team);

// Get a team member by ID
export function getMember(id: string): TeamMember | undefined {
  return team[id];
}

// Get initials from a name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
}

// Get member name by ID (for display)
export function getMemberName(id: string): string {
  return team[id]?.name ?? id;
}

// Get multiple member names
export function getMemberNames(ids: string[]): string[] {
  return ids.map((id) => getMemberName(id));
}
