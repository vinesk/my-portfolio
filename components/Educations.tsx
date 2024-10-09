import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educations, Education } from "@/data/educations";

export default function Educations() {
  return (
    <motion.section
      id="educations"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Formations</h2>
      <div className="overflow-x-auto pb-6">
        <div className="flex space-x-4 md:space-x-6 min-w-max">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[24rem] xl:w-[26rem] h-auto">
      <CardHeader className="pb-3">
        <div className="flex items-center mb-2">
          <div className="mr-4 h-16 w-16 relative rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={`/icons/educations/${education.icon}`}
              alt={`${education.institution} logo`}
              fill
              sizes="(max-width: 768px) 64px, 96px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <CardTitle className="text-lg sm:text-xl font-bold">
            {education.degree}
          </CardTitle>
        </div>
        <CardDescription className="text-base sm:text-lg font-bold">
          {education.institution}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base font-medium text-muted-foreground mb-3">
          {education.duration}
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          {education.description}
        </p>
      </CardContent>
    </Card>
  );
}
