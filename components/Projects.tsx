import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Projet 1",
      description:
        "Une application full-stack mettant en valeur l'intégration de React et Node.js. Ce projet démontre un design responsive et une gestion efficace des données.",
      image: "/images/project1.jpg",
      skills: ["React", "Node.js", "MongoDB"],
      previewLink: "https://project1.com",
      codeLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Projet 2",
      description:
        "Une application mobile multi-plateforme développée avec React Native. Elle propose des mises à jour en temps réel et une expérience utilisateur fluide sur iOS et Android.",
      image: "/images/project2.jpg",
      skills: ["React Native", "Firebase"],
      previewLink: "https://project2.com",
      codeLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Projet 3",
      description:
        "Une application web moderne construite avec Next.js et TypeScript. Ce projet met en avant les capacités de rendu côté serveur et de génération de sites statiques.",
      image: "/images/project3.jpg",
      skills: ["TypeScript", "Next.js", "Tailwind CSS"],
      previewLink: "https://project3.com",
      codeLink: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <div className="relative h-48 md:h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="flex-grow flex flex-col justify-between p-6">
              <div>
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" /> Aperçu
                </Button>
                <Button variant="outline" size="sm">
                  <Code className="mr-2 h-4 w-4" /> Code
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
