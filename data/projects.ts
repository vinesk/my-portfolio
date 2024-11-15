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
    title: "Horizon",
    description:
      "Horizon est une application web qui permet aux utilisateurs de connecter leurs comptes bancaires et d'effectuer des transferts d'argent en toute sécurité.",
    image:
      "https://raw.githubusercontent.com/vinesk/horizon/main/public/horizon.png",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Plaid",
      "Dwolla",
      "Sentry",
    ],
    previewUrl: "https://horizon-vinesk.vercel.app/",
    codeUrl: "https://github.com/vinesk/horizon",
  },
  {
    id: uuidv4(),
    title: "Morning News",
    description:
      "Morning News est une application web qui affiche les dernières actualités de TechCrunch via NewsAPI. Les utilisateurs peuvent s'inscrire, se connecter et sauvegarder leurs articles préférés.",
    image:
      "https://raw.githubusercontent.com/vinesk/morning-news/refs/heads/main/frontend/public/morningnews.png",
    skills: ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    previewUrl: "https://morning-news-vinesk.vercel.app/",
    codeUrl: "https://github.com/vinesk/morning-news",
  },
  {
    id: uuidv4(),
    title: "Hack a Tweet",
    description:
      "Hack a Tweet est une application web qui reproduit les principales fonctionnalités de Twitter. Les utilisateurs peuvent s'inscrire, se connecter, publier des tweets et interagir avec le contenu des autres utilisateurs.",
    image:
      "https://github.com/vinesk/hackatweet/blob/main/frontend/public/hackatweet.png",
    skills: ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB"],
    previewUrl: "https://hackatweet-vinesk.vercel.app/",
    codeUrl: "https://github.com/vinesk/hackatweet",
  },
  {
    id: uuidv4(),
    title: "Memory Game",
    description:
      "Memory Game est une application web React qui met en œuvre le jeu classique de correspondance de cartes. Les joueurs testent leur mémoire en retournant les cartes et en essayant de trouver les paires correspondantes.",
    image:
      "https://raw.githubusercontent.com/vinesk/lacapsule-memorygame/refs/heads/main/public/memorygame.png",
    skills: ["React", "Next.js"],
    previewUrl: "https://memory-game-vinesk.vercel.app",
    codeUrl: "https://github.com/vinesk/memory-game",
  },
  // {
  //   id: uuidv4(),
  //   title: "My Moviz",
  //   description:
  //     "My Moviz est une application web qui affiche les dernières sorties de films. Les utilisateurs peuvent ajouter des films à leurs favoris, gérer un compteur de vues et évaluer chaque film présenté.",
  //   image:
  //     "https://raw.githubusercontent.com/vinesk/lacapsule-mymoviz-frontend/refs/heads/main/public/mymoviz.png",
  //   skills: ["React", "Next.js", "Node.js", "Express"],
  //   previewUrl: "https://lacapsule-mymoviz-frontend.vercel.app/",
  //   codeUrl: "https://github.com/vinesk/lacapsule-mymoviz-frontend",
  // },
];
