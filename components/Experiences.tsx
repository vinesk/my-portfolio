import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function Experiences() {
  const experience = [
    {
      title: "Ingénieur Nucléaire - Risque d'explosion",
      company: "Kury Ingénierie",
      duration: "01/2021 – 03/2024",
      description:
        "Responsable d'activités liées à l'évaluation des risques d'explosion interne pour le projet de réacteur EPR HPC",
    },
    {
      title: "Ingénieur Nucléaire - Ventilation",
      company: "IRSN",
      duration: "11/2017 - 06/2020",
      description:
        "Responsable d'activités liées à l'évaluation des systèmes de ventilation des réacteurs français",
    },
    {
      title: "Ingénieur Nucléaire - Ventilation",
      company: "AUSY",
      duration: "09/2014 - 10/2017",
      description:
        "Élaboration de fiches de synthèse sur les rapports d'incidents de criticité dans les laboratoires nucléaires",
    },
    {
      title: "Intégrateur Web Freelance",
      company: "Le Figaro",
      duration: "07/2020 – 12/2020",
      description:
        "Intégration de maquettes Figma (HTML, CSS/Sass, JavaScript)",
    },
  ];

  return (
    <motion.section
      id="experiences"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Expérience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                {exp.title}
              </CardTitle>
              <CardDescription>{exp.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{exp.duration}</p>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
