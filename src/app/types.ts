export type Experience = {
  start: string;
  end: string;
  location: string;
  role: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  image: string;
  links: { text: string; url: string }[];
};
