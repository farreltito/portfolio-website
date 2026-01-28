
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'education' | 'experience';
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}
