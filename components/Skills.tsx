import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { skills, Skill } from "@/data/skills";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Compétences</h2>
      <motion.div
        className="flex flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill: Skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={24}
                height={24}
                className="mr-2 inline-block"
              />
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
