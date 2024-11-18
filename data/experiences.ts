import { v4 as uuidv4 } from "uuid";

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  icon: string;
  type: string;
  skills: string[];
  link: string;
}

export const experiences: Experience[] = [
  {
    id: uuidv4(),
    title: "Ingénieur Nucléaire - Risque d'explosion",
    company: "Kury Ingénierie",
    duration: "01/2021 – 03/2024",
    description: [
      "Responsable d’activités liées à l'évaluation des risques d'explosion interne pour le projet de réacteur EPR HPC",
      "Pilotage de réunions avec le concepteur, l'exploitant et l'autorité de sûreté pour démontrer la robustesse des études",
      "Collaboration avec des équipes multidisciplinaires et formation de nouveaux collaborateurs",
    ],
    icon: "kury.jpeg",
    type: "CDI",
    skills: ["Analyse de risques", "Sûreté nucléaire", "Gestion de projet"],
    link: "https://www.kury-ingenierie.com/",
  },
  {
    id: uuidv4(),
    title: "Intégrateur Web Freelance",
    company: "Le Figaro",
    duration: "07/2020 – 01/2021",
    description: ["Intégration de maquettes Figma"],
    icon: "le-figaro.png",
    type: "Freelance",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
    link: "https://www.lefigaro.fr/",
  },
  {
    id: uuidv4(),
    title: "Ingénieur Nucléaire - Ventilation",
    company: "IRSN",
    duration: "11/2017 - 06/2020",
    description: [
      "Responsable d'activités liées à l'évaluation des systèmes de ventilation des réacteurs français",
      "Réalisation de contre-expertises des dossiers de sûreté fournis par EDF",
      "Élaboration de rapports détaillés à l'intention de l'autorité de sûreté, incluant l'analyse des réponses des exploitants, et présentation d'analyses lors de réunions décisionnelles cruciales",
    ],
    icon: "irsn.png",
    type: "CDI",
    skills: [
      "Ventilation nucléaire",
      "Évaluation de sûreté",
      "Réglementation nucléaire",
    ],
    link: "https://www.irsn.fr/",
  },
  {
    id: uuidv4(),
    title: "Ingénieur Nucléaire - Ventilation",
    company: "AUSY",
    duration: "09/2014 - 10/2017",
    description: [
      "Élaboration de fiches de synthèse sur les rapports d'incidents de criticité dans les laboratoires nucléaires",
      "Participation à des projets variés chez Edvance, travaillant avec différentes équipes sur la conception des systèmes de ventilation du réacteur EPR HPC",
    ],
    icon: "ausy.png",
    type: "CDI",
    skills: ["Analyse de sûreté", "Criticité", "Rédaction technique"],
    link: "https://www.ausy.fr/",
  },
];
