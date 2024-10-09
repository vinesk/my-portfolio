import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <Card className="p-6">
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mes informations</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{contact.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{contact.email}</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{contact.address}</span>
                </li>
                <li className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <Link
                    href={contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.linkedin.url.replace("https://", "")}
                  </Link>
                </li>
                <li className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  <Link
                    href={contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.github.url.replace("https://", "")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Envoyez-moi un message
              </h3>
              <form className="space-y-4">
                <Input type="text" placeholder="Nom" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" />
                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
