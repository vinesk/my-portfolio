"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SECTIONS = [
  Header,
  About,
  Skills,
  Projects,
  Experiences,
  Educations,
  Contact,
  Footer,
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground px-8 container mx-auto py-8">
      {SECTIONS.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
