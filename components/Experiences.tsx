import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { experiences, Experience } from "@/data/experiences";
import { Badge } from "@/components/ui/badge";

export default function Experiences() {
  return (
    <motion.section
      id="experiences"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Expériences</h2>
      <div className="relative ml-20">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12 relative"
    >
      <div className="absolute -left-20 top-0 w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src={`/icons/experiences/${experience.icon}`}
          alt={`${experience.company} logo`}
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="border-l border-gray-200 pl-8 pb-3">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-lg font-medium text-gray-600">
          {experience.company}
        </p>
        <div className="flex items-center gap-2 mt-1 mb-2">
          <p className="text-sm text-gray-500">{experience.duration}</p>
          <Badge variant="default" className="text-sm md:text-base">
            {experience.type}
          </Badge>
        </div>
        <ul className="list-disc pl-5 text-base mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="pl-1 mb-2">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-2">
          {experience.skills.map((skill, skillIndex) => (
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
    </motion.div>
  );
}
