import { v4 as uuidv4 } from "uuid";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  skills: string[];
  previewUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  // {
  //   id: uuidv4(),
  //   title: "Projet 1",
  //   description:
  //     "Une application full-stack mettant en valeur l'intégration de React et Node.js. Ce projet démontre un design responsive et une gestion efficace des données.",
  //   image: "/images/project1.jpg", // Commenté pour le moment
  //   skills: ["React", "Node.js", "MongoDB"],
  //   previewUrl: "https://project1.com",
  //   codeUrl: "https://github.com/yourusername/project1",
  // },
];
