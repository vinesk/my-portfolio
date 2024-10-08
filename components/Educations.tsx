import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Educations() {
  const education = [
    {
      degree: "Développeur Full Stack JavaScript",
      institution: "La Capsule, Paris",
      duration: "06/2024 – 08/2024",
      description: "3 mois de formation intensive",
    },
    {
      degree: "La Piscine (examen d'entrée)",
      institution: "42, Paris",
      duration: "07/2019",
      description: "1 mois d'immersion",
    },
    {
      degree: "Master Ingénierie Nucléaire",
      institution: "Université Grenoble Alpes",
      duration: "09/2012 - 08/2014",
      description: "2 ans de spécialisation",
    },
  ];

  return (
    <motion.section
      id="educations"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Formation</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                {edu.degree}
              </CardTitle>
              <CardDescription>{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
