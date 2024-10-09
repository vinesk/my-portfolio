export interface Project {
  title: string;
  description: string;
  image?: string;
  skills: string[];
  previewLink: string;
  codeLink: string;
}

export const projects: Project[] = [
  {
    title: "Projet 1",
    description:
      "Une application full-stack mettant en valeur l'intégration de React et Node.js. Ce projet démontre un design responsive et une gestion efficace des données.",
    // image: "/images/project1.jpg", // Commenté pour le moment
    skills: ["React", "Node.js", "MongoDB"],
    previewLink: "https://project1.com",
    codeLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Projet 2",
    description:
      "Une application mobile multi-plateforme développée avec React Native. Elle propose des mises à jour en temps réel et une expérience utilisateur fluide sur iOS et Android.",
    // image: "/images/project2.jpg",
    skills: ["React Native", "Firebase"],
    previewLink: "https://project2.com",
    codeLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Projet 3",
    description:
      "Une application web moderne construite avec Next.js et TypeScript. Ce projet met en avant les capacités de rendu côté serveur et de génération de sites statiques.",
    // image: "/images/project3.jpg",
    skills: ["TypeScript", "Next.js", "Tailwind CSS"],
    previewLink: "https://project3.com",
    codeLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Projet 3",
    description:
      "Une application web moderne construite avec Next.js et TypeScript. Ce projet met en avant les capacités de rendu côté serveur et de génération de sites statiques.",
    // image: "/images/project3.jpg",
    skills: ["TypeScript", "Next.js", "Tailwind CSS"],
    previewLink: "https://project3.com",
    codeLink: "https://github.com/yourusername/project3",
  },
];
