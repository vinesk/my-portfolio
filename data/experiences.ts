export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
  type: string;
  skills: string[];
  link: string;
}

export const experiences: Experience[] = [
  {
    title: "Ingénieur Nucléaire - Risque d'explosion",
    company: "Kury Ingénierie",
    duration: "01/2021 – 03/2024",
    description:
      "Responsable d'activités liées à l'évaluation des risques d'explosion interne pour le projet de réacteur EPR HPC",
    icon: "kury.jpeg",
    type: "CDI",
    skills: ["Analyse de risques", "Sûreté nucléaire", "Gestion de projet"],
    link: "https://www.kury-ingenierie.com/",
  },
  {
    title: "Intégrateur Web Freelance",
    company: "Le Figaro",
    duration: "07/2020 – 12/2020",
    description: "Intégration de maquettes Figma (HTML, CSS/Sass, JavaScript)",
    icon: "le-figaro.png",
    type: "Freelance",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
    link: "https://www.lefigaro.fr/",
  },
  {
    title: "Ingénieur Nucléaire - Ventilation",
    company: "IRSN",
    duration: "11/2017 - 06/2020",
    description:
      "Responsable d'activités liées à l'évaluation des systèmes de ventilation des réacteurs français",
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
    title: "Ingénieur Nucléaire - Ventilation",
    company: "AUSY",
    duration: "09/2014 - 10/2017",
    description:
      "Élaboration de fiches de synthèse sur les rapports d'incidents de criticité dans les laboratoires nucléaires",
    icon: "ausy.png",
    type: "CDI",
    skills: ["Analyse de sûreté", "Criticité", "Rédaction technique"],
    link: "https://www.ausy.fr/",
  },
];
