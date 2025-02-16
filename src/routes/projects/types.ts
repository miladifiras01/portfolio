export type Project = {
    name: String;
    description: string;
    images: ProjectImage[];
    technologies: Technology[];
    shortDescription: string;
    role: string;
    link: string;
  };
export type ProjectImage = {
  imageUrl: string;
}
export type Technology = {
  name: string;
}