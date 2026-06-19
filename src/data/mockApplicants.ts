export interface Applicant {
  id: string;
  name: string;
  role: string;
  hourlyRateMin: number;
  hourlyRateMax: number;
  annualSalary?: number;
  skills: string[];
  status: 'new' | 'shortlisted' | 'rejected';
  videoUrl?: string;
  thumbnailUrl?: string;
  englishProficiency?: number;
  experienceMatch?: number;
}

export const mockApplicants: Applicant[] = [
  {
    id: '1',
    name: 'Guy Hawkins',
    role: 'Senior UI/UX Designer',
    hourlyRateMin: 50,
    hourlyRateMax: 60,
    skills: ['Figma', 'Prototyping', 'Wireframe'],
    status: 'new',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 90,
    experienceMatch: 95
  },
  {
    id: '2',
    name: 'Jane Doe',
    role: 'Product Designer',
    hourlyRateMin: 40,
    hourlyRateMax: 50,
    skills: ['UI Design', 'User Research'],
    status: 'new',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 80,
    experienceMatch: 85
  },
  {
    id: '3',
    name: 'John Smith',
    role: 'UX Researcher',
    hourlyRateMin: 30,
    hourlyRateMax: 45,
    skills: ['User Testing', 'Analytics'],
    status: 'new',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 95,
    experienceMatch: 70
  },
  {
    id: '4',
    name: 'Alice Johnson',
    role: 'Visual Designer',
    hourlyRateMin: 60,
    hourlyRateMax: 80,
    skills: ['Figma', 'Illustration', 'Animation'],
    status: 'new',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 100,
    experienceMatch: 90
  },
  {
    id: '5',
    name: 'Bob Brown',
    role: 'Interaction Designer',
    hourlyRateMin: 45,
    hourlyRateMax: 55,
    skills: ['Figma', 'Framer', 'Prototyping'],
    status: 'new',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 85,
    experienceMatch: 80
  },
  {
    id: '6',
    name: 'Guy Hawkins',
    role: 'Senior UI/UX Designer',
    hourlyRateMin: 55,
    hourlyRateMax: 65,
    skills: ['Figma', 'Prototyping', 'Wireframe'],
    status: 'shortlisted',
    thumbnailUrl: '/assets/thumbnail.png',
    englishProficiency: 90,
    experienceMatch: 95
  }
];
