import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skills = [
    {
      name: "HTML/CSS",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "React",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "TypeScript",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git/GitHub",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium flex items-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="w-full" />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
