import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">Vincent Eskenazi</h1>
          <h2 className="text-2xl text-muted-foreground mb-4">
            Développeur Full Stack JavaScript
          </h2>
          <p className="mb-4">
            Ancien Ingénieur Nucléaire reconverti en Développeur Full Stack
            JavaScript avec une passion pour la résolution de problèmes
            complexes et la création d&apos;applications performantes.
          </p>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Télécharger CV
          </Button>
        </div>
        <div className="md:w-1/3">
          <Avatar className="w-48 h-48">
            <AvatarImage
              src="/images/vincent-eskenazi.jpg"
              alt="Vincent Eskenazi"
            />
            <AvatarFallback>VE</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.section>
  );
}
