import { v4 as uuidv4 } from "uuid";

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
}

export const educations: Education[] = [
  {
    id: uuidv4(),
    degree: "Développeur Full Stack JavaScript",
    institution: "La Capsule, Paris",
    duration: "06/2024 – 08/2024",
    description: "3 mois de formation intensive",
    icon: "la-capsule.png",
  },
  {
    id: uuidv4(),
    degree: "La Piscine (examen d'entrée)",
    institution: "42, Paris",
    duration: "07/2019",
    description: "1 mois d'immersion",
    icon: "42.svg",
  },
  {
    id: uuidv4(),
    degree: "Master Ingénierie Nucléaire",
    institution: "Université Grenoble Alpes",
    duration: "09/2012 - 08/2014",
    description: "2 ans de spécialisation",
    icon: "universite-grenoble-alpes.jpg",
  },
  {
    id: uuidv4(),
    degree: "Licence Physique",
    institution: "Université Côte d'Azur",
    duration: "09/2008 - 08/2011",
    description: "3 ans de spécialisation",
    icon: "universite-cote-azur.jpg",
  },
];
