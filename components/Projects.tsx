import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const defaultImage = "/images/default-project.jpg";

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Projets</h2>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              defaultImage={defaultImage}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">
          Aucun projet n&apos;est disponible pour le moment.
        </p>
      )}
    </motion.section>
  );
}

function ProjectCard({
  project,
  defaultImage,
}: {
  project: Project;
  defaultImage: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 md:h-64">
        <Image
          src={project.image || defaultImage}
          alt={project.title}
          title={
            project.image
              ? project.title
              : "Photo par Rahul Mishra sur Unsplash"
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-lg"
          priority
        />
      </div>
      <CardContent className="flex-grow flex flex-col justify-between p-6">
        <div>
          <CardTitle className="mb-2 text-lg md:text-xl font-bold">
            {project.title}
          </CardTitle>
          <CardDescription className="mb-4 text-base md:text-md">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="text-sm md:text-base"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {project.previewUrl && (
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base"
              asChild
            >
              <Link href={project.previewUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" /> Aperçu
              </Link>
            </Button>
          )}
          {project.codeUrl && (
            <Button
              variant="default"
              size="sm"
              className="text-sm md:text-base"
              asChild
            >
              <Link href={project.codeUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
