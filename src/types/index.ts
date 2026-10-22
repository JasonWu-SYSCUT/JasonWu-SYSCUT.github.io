export interface NavItem {
  id: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
  desc: string;
}

export interface DirectionModalContent {
  overview: string;
  keyWork: string[];
  expertise: string[];
  results: string[];
}

export interface Direction {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  intro: string;
  tags: string[];
  image: string;
  modal: DirectionModalContent;
}

export interface Product {
  id: string;
  name: string;
  en: string;
  desc: string;
  tags: string[];
  icon: string;
  href?: string;
  hrefLabel?: string;
  paper?: string;
  impactFactor?: string;
  citations?: number;
  isQr?: boolean;
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  desc: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface Award {
  competition: string;
  prize: string;
  role: string;
  project: string;
}
