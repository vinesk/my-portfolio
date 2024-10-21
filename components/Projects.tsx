import React, { useRef, useEffect, useState } from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselApi } from "@/components/ui/carousel";

export default function Projects() {
  const defaultImage = "/images/default-project.jpg";
  const [api, setApi] = useState<CarouselApi>();
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    if (!api) return;
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 w-full"
    >
      <h2 className="text-2xl font-bold mb-6">Projets</h2>
      {projects.length > 0 ? (
        <div className="relative w-full">
          <div ref={emblaRef} className="w-full">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <ProjectCard
                      project={project}
                      defaultImage={defaultImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" />
              <CarouselNext className="hidden" />
            </Carousel>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <Button variant="outline" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
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
