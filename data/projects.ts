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
  {
    id: uuidv4(),
    title: "Fashion E-Commerce",
    description:
      "Fashion E-Commerce est une application web complète qui permet aux utilisateurs de parcourir et d'acheter des vêtements en ligne, avec une interface d'administration dédiée.",
    image:
      "https://raw.githubusercontent.com/vinesk/e-commerce-frontend/refs/heads/main/public/ecommerce.png",
    skills: [
      "React",
      "Vite",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    previewUrl: "https://e-commerce-frontend-uydm.onrender.com/",
    codeUrl: "https://github.com/vinesk/e-commerce-frontend",
  },
  {
    id: uuidv4(),
    title: "Banking App",
    description:
      "Banking App est une application web qui permet aux utilisateurs de connecter leurs comptes bancaires et d'effectuer des transferts d'argent en toute sécurité.",
    image:
      "https://raw.githubusercontent.com/vinesk/banking/refs/heads/main/public/banking.png",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Plaid",
      "Dwolla",
      "Sentry",
    ],
    previewUrl: "https://vinesk-banking.vercel.app/",
    codeUrl: "https://github.com/vinesk/banking",
  },

  {
    id: uuidv4(),
    title: "Hack a Tweet",
    description:
      "Hack a Tweet est une application web qui reproduit les principales fonctionnalités de Twitter. Les utilisateurs peuvent s'inscrire, se connecter, publier des tweets et interagir avec le contenu des autres utilisateurs.",
    image:
      "https://raw.githubusercontent.com/vinesk/lacapsule-hackatweet-frontend/refs/heads/main/public/hackatweet.png",
    skills: ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    previewUrl: "https://lacapsule-hackatweet-frontend.vercel.app/",
    codeUrl: "https://github.com/vinesk/lacapsule-hackatweet-frontend",
  },
  {
    id: uuidv4(),
    title: "Morning News",
    description:
      "Morning News est une application web qui affiche les dernières actualités de TechCrunch via NewsAPI. Les utilisateurs peuvent s'inscrire, se connecter et sauvegarder leurs articles préférés.",
    image:
      "https://raw.githubusercontent.com/vinesk/lacapsule-morningnews-frontend/refs/heads/main/public/morningnews.png",
    skills: ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    previewUrl: "https://lacapsule-morningnews-frontend.vercel.app/",
    codeUrl: "https://github.com/vinesk/lacapsule-morningnews-frontend",
  },

  {
    id: uuidv4(),
    title: "My Moviz",
    description:
      "My Moviz est une application web qui affiche les dernières sorties de films. Les utilisateurs peuvent ajouter des films à leurs favoris, gérer un compteur de vues et évaluer chaque film présenté.",
    image:
      "https://raw.githubusercontent.com/vinesk/lacapsule-mymoviz-frontend/refs/heads/main/public/mymoviz.png",
    skills: ["React", "Next.js", "Node.js", "Express"],
    previewUrl: "https://lacapsule-mymoviz-frontend.vercel.app/",
    codeUrl: "https://github.com/vinesk/lacapsule-mymoviz-frontend",
  },
  {
    id: uuidv4(),
    title: "Memory Game",
    description:
      "Memory Game est une application web React qui met en œuvre le jeu classique de correspondance de cartes. Les joueurs testent leur mémoire en retournant les cartes et en essayant de trouver les paires correspondantes.",
    image:
      "https://raw.githubusercontent.com/vinesk/lacapsule-memorygame/refs/heads/main/public/memorygame.png",
    skills: ["React", "Next.js"],
    previewUrl: "https://lacapsule-memorygame.vercel.app/",
    codeUrl: "https://github.com/vinesk/lacapsule-memorygame",
  },
];
