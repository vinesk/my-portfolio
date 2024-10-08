"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Educations />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
