import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { about } from "@/data/about";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-8 sm:mb-12 md:mb-16 py-8 sm:py-10 md:py-12"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16">
        <div className="w-full lg:w-2/3 xl:w-3/4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            {about.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 sm:mb-5 md:mb-6">
            {about.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto lg:mx-0">
            {about.description}
          </p>
          <Button
            size="lg"
            className="text-base sm:text-lg"
            onClick={() => window.open(about.cvUrl, "_blank")}
            aria-label="Télécharger le CV de Vincent Eskenazi"
          >
            <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
            Télécharger CV
          </Button>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/4 flex justify-center mb-6 lg:mb-0">
          <Avatar className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <AvatarImage
              src={about.avatarSrc}
              alt={about.avatarAlt}
              className="object-cover"
            />
            <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl">
              {about.avatarFallback}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.section>
  );
}
