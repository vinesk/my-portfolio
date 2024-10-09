interface About {
  name: string;
  title: string;
  description: string;
  avatarSrc: string;
  avatarAlt: string;
  avatarFallback: string;
  cvUrl: string;
}

export const about: About = {
  name: "Vincent Eskenazi",
  title: "Développeur Full Stack JavaScript",
  description:
    "Ancien Ingénieur Nucléaire reconverti en Développeur Full Stack JavaScript avec une passion pour la résolution de problèmes complexes et la création d'applications performantes.",
  avatarSrc: "/images/vincent-eskenazi.jpg",
  avatarAlt: "Vincent Eskenazi",
  avatarFallback: "VE",
  cvUrl: "/documents/cv-vincent-eskenazi.pdf",
};
