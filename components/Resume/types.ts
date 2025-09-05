export type ResumeData = {
  basics: {
    name: string;
    label?: string;
    email?: string;
    phone?: string;
    url?: string;
    location?: string;
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  experience?: {
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate: string;
    highlights?: string[];
    tech?: string[];
  }[];
  projects?: {
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    url?: string;
    repo?: string;
    highlights?: string[];
    tech?: string[];
  }[];
  education?: {
    institution: string;
    area: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
  }[];
  skills?: {
    category: string;
    items: string[];
  }[];
  certifications?: {
    name: string;
    issuer?: string;
    date?: string;
    url?: string;
  }[];
};
