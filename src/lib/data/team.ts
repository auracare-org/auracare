export interface TeamMember {
  id: string;
  name: string;
  img?: string;
  role: string;
  linkedin?: string;
  website?: string;
}

export const team: Record<string, TeamMember> = {
  'hinlin-chen': {
    id: 'hinlin-chen',
    name: 'Hinlun Chen',
    img: '/JPG/hinlin-chen.jpg',
    role: 'Co-Founder, CEO & CFO',
    linkedin: 'https://www.linkedin.com/in/hin-lun-chen/',
    website: 'https://www.hinlun.com/'
  },
  'stephen-okita': {
    id: 'stephen-okita',
    name: 'Stephen Okita',
    img: '/JPG/stephen-okita.jpg',
    role: 'Co-Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/stephen-okita/',
    website: 'https://stephenokita.com/'
  },
  'nicholas-chae': {
    id: 'nicholas-chae',
    name: 'Nicholas Chae',
    img: '/JPG/nicholas-che.jpg',
    role: 'Head of Machine Learning (ML)',
    linkedin: 'https://www.linkedin.com/in/nicholas-chae/'
  },
  'linus-alpsten': {
    id: 'linus-alpsten',
    name: 'Linus Alpsten',
    img: '/JPG/linus-alpsten.jpg',
    role: 'Head of Partnerships and Research',
    linkedin: 'https://www.linkedin.com/in/linus-alpsten-665b551b0/'
  },
  'ahnaf-kabir': {
    id: 'ahnaf-kabir',
    name: 'Ahnaf Kabir',
    img: '/JPG/ahnaf-kabir.jpg',
    role: 'Full Stack Developer & Head of IT',
    linkedin: 'https://www.linkedin.com/in/akn101',
    website: 'https://akn.me.uk/'
  },
  'mini-han-wang': {
    id: 'mini-han-wang',
    name: 'Mini Han Wang',
    img: '/JPG/minhan-wang.jpg',
    role: 'Medical Data Science Advisor',
    linkedin: 'https://www.linkedin.com/in/han-wang-mini/',
    website: 'https://www.researchgate.net/profile/Mini-Han-Wang'
  },
  'julius-chu': {
    id: 'julius-chu',
    name: 'Julius Chu',
    img: '/JPG/julius-chu.jpg',
    role: 'Marketing Advisor',
    linkedin: 'https://www.linkedin.com/in/juliuschu/'
  },
  'ayza-zainal': {
    id: 'ayza-zainal',
    name: 'Ayza Zainal',
    img: '/JPG/ayza-zainal.jpg',
    role: 'Freelance UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/ayzazainal/'
  },
  'lu': {
    id: 'lu',
    name: 'Lu',
    role: 'Hardware Engineering Lead'
  },
  'tanush-pandey': {
    id: 'tanush-pandey',
    name: 'Tanush Pandey',
    img: '/JPG/tanush-pandey.jpg',
    role: 'Medical Partnerships Intern',
    linkedin: 'https://www.linkedin.com/in/tanush-pandey-767a60260/'
  },
  'stella-goeschl': {
    id: 'stella-goeschl',
    name: 'Stella Goeschl',
    img: '/JPG/stella-goeschl.jpg',
    role: 'Medical Partnerships Intern',
    linkedin: 'https://www.linkedin.com/in/stella-goeschl/'
  },
  'sara-villaveces-latorre': {
    id: 'sara-villaveces-latorre',
    name: 'Sara Villaveces Latorre',
    img: '/JPG/sara-villaveces-latorre.jpg',
    role: 'Hardware Engineering Intern',
    linkedin: 'https://www.linkedin.com/in/sara-villaveces-latorre/'
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
