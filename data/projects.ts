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
  //   // image: "https://placehold.co/600x400",
  //   skills: ["React", "Node.js", "MongoDB"],
  //   previewUrl: "https://project1.com",
  //   codeUrl: "https://github.com/yourusername/project1",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Application de Gestion des Tâches",
  //   description:
  //     "Une application web moderne pour la gestion des tâches, utilisant Vue.js pour le frontend et Django pour le backend. Elle offre des fonctionnalités de tri, de filtrage et de collaboration en temps réel.",
  //   // image: "https://placehold.co/600x400",
  //   skills: ["Vue.js", "Django", "PostgreSQL", "WebSockets"],
  //   previewUrl: "https://taskmanager.example.com",
  //   codeUrl: "https://github.com/yourusername/task-manager",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Portfolio Photographique",
  //   description:
  //     "Un site web élégant pour présenter un portfolio photographique, construit avec Gatsby pour des performances optimales. Il intègre une galerie dynamique et un système de gestion de contenu headless.",
  //   // image: "https://placehold.co/600x400",
  //   skills: ["Gatsby", "React", "GraphQL", "Contentful"],
  //   previewUrl: "https://photo-portfolio.example.com",
  //   codeUrl: "https://github.com/yourusername/photo-portfolio",
  // },
  // {
  //   id: uuidv4(),
  //   title: "API de Recommandation de Films",
  //   description:
  //     "Une API RESTful développée avec FastAPI qui utilise des algorithmes de machine learning pour recommander des films basés sur les préférences de l'utilisateur et l'historique de visionnage.",
  //   // image: "https://placehold.co/600x400",
  //   skills: ["FastAPI", "Python", "Machine Learning", "SQLAlchemy"],
  //   previewUrl: "https://movie-api.example.com/docs",
  //   codeUrl: "https://github.com/yourusername/movie-recommendation-api",
  // },
];
