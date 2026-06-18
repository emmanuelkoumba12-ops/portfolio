export const personalInfo = {
  name: "KOUMBA KOUMBA Wisy Kedy Emmanuel",
  firstName: "Emmanuel",
  title: "Développeur Web & Support Technique",
  subtitle: "Titulaire d'une Licence Professionnelle en Bases de Données, Réseaux et Web. Autonome, rigoureux et orienté solutions.",
  email: "wisykedy12@gmail.com",
  phone: "+241 62 57 32 97",
  location: "Libreville, Gabon",
  cvUrl: "/cv-emmanuel-koumba.pdf",
  github: "https://github.com/emmanuel-koumba",
  linkedin: "https://linkedin.com/in/emmanuel-koumba",
  bio: "Étudiant titulaire d'une Licence Professionnelle en Bases de Données, Réseaux et Web. Doté d'une expérience pratique acquise en stage dans une structure informatique, j'ai eu à intervenir sur des missions variées de support technique, d'administration réseau et de développement web.",
  bioExtended: "Autonome, rigoureux et orienté solutions, je combine créativité et rigueur technique pour transformer des idées en produits digitaux concrets. J'aime relever des défis complexes et continuer à apprendre chaque jour pour rester à la pointe des technologies.",
};

export const experiences = [
  {
    id: 1,
    role: "Stagiaire en Informatique — Support Technique & Développement Web",
    company: "Ministère de la Réforme et des Relations avec les Institutions",
    period: "2025 – 2026",
    location: "Libreville, Gabon",
    description: "Stage en informatique couvrant le développement web, l'administration réseau et le support technique au sein d'une structure gouvernementale.",
    tasks: [
      "Conception et mise en place d'une application Web : maquette, design et développement des pages",
      "Récupération de fichiers sur des clés USB endommagées et réinstallation de systèmes d'exploitation",
      "Déploiement d'antivirus sur le parc informatique avec mise à jour des définitions",
      "Installation du pack Microsoft Office et configurations logicielles",
      "Configuration de points d'accès Wi-Fi Cisco : paramétrage, sécurisation et vérification de la couverture réseau",
      "Interventions techniques sur des équipements informatiques en panne",
    ],
  },
  {
    id: 2,
    role: "Chargé de Projet Étudiant",
    company: "Institut Supérieur de Technologie (I.S.T)",
    period: "2023",
    location: "Libreville, Gabon",
    description: "Coordination d'une équipe étudiante pour la conception et le développement d'un Système de Gestion des Étudiants (SGE).",
    tasks: [
      "Coordination d'une équipe de 3 étudiants sur le projet SGE",
      "Analyse des besoins et modélisation UML et bases de données",
      "Développement de l'application en Java/PHP avec MySQL",
      "Présentation de la solution fonctionnelle devant un jury",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Licence Professionnelle en Informatique",
    school: "Institut Supérieur de Technologie (I.S.T)",
    period: "2022 – 2025",
    location: "Libreville, Gabon",
    description: "Spécialisation en Bases de Données, Réseaux et Web. Formation couvrant le développement web, les réseaux, les bases de données et la gestion de projets informatiques.",
  },
  {
    id: 2,
    degree: "Baccalauréat Littéraire & Mathématique A1",
    school: "Lycée Paul Indjendjet Gondjout",
    period: "2021 – 2022",
    location: "Libreville, Gabon",
    description: "Série A1 — Littéraire et Mathématiques.",
  },
  {
    id: 3,
    degree: "Brevet d'Étude du Premier Cycle (BEPC)",
    school: "Lycée National Léon MBA",
    period: "2021",
    location: "Libreville, Gabon",
    description: "Obtention du Brevet d'Études du Premier Cycle.",
  },
];

export const skills = [
  { name: "HTML / CSS / Bootstrap", level: 88, category: "Front-End" },
  { name: "JavaScript", level: 80, category: "Front-End" },
  { name: "PHP", level: 78, category: "Back-End" },
  { name: "Python", level: 72, category: "Back-End" },
  { name: "Java", level: 68, category: "Back-End" },
  { name: "MySQL", level: 82, category: "Base de données" },
  { name: "PostgreSQL", level: 75, category: "Base de données" },
  { name: "SQL / NoSQL", level: 78, category: "Base de données" },
  { name: "Réseaux (LAN / TCP-IP / Wi-Fi)", level: 75, category: "Réseaux" },
  { name: "Support & Systèmes Windows", level: 85, category: "Réseaux" },
];

export const tools = [
  { name: "VS Code", icon: "SiVscodium", color: "#007ACC" },
  { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
  { name: "Canva", icon: "SiCanva", color: "#00C4CC" },
  { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
  { name: "GitHub", icon: "SiGithub", color: "#181717" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { name: "Vite", icon: "SiVite", color: "#646CFF" },
];

export const projects = [
  {
    id: 1,
    title: "InterMin",
    subtitle: "Demande d'intervention en ligne",
    description: "Application web de gestion des demandes d'intervention informatique au sein du Ministère de la Réforme. Permet de soumettre, suivre et traiter les tickets d'assistance technique.",
    details: "Développée lors de mon stage au Ministère, cette application centralise toutes les demandes d'intervention du parc informatique. Elle permet aux agents de soumettre leurs problèmes techniques et aux techniciens de les traiter efficacement avec un suivi en temps réel.",
    image: "/projects/Demande d'intervention.png",
    screenshots: ["/projects/Demande d'intervention.png"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    demo: "#",
    featured: true,
    category: "Application Web",
  },
  {
    id: 2,
    title: "Diboti",
    subtitle: "Sauvegarde des données du Ministère",
    description: "Système de sauvegarde et d'archivage sécurisé des données numériques du Ministère de la Réforme. Gestion centralisée des fichiers et récupération en cas d'incident.",
    details: "Diboti est une solution de sauvegarde développée pour sécuriser les données critiques du Ministère. Il automatise les sauvegardes, gère les versions des fichiers et permet une restauration rapide en cas de perte ou de corruption des données.",
    image: "/projects/sauvegarde des données du ministere.jpeg",
    screenshots: ["/projects/sauvegarde des données du ministere.jpeg"],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "#",
    demo: "#",
    featured: true,
    category: "Application Web",
  },
  {
    id: 3,
    title: "EduGabon",
    subtitle: "Plateforme éducative en ligne",
    description: "Plateforme éducative numérique destinée aux étudiants gabonais. Offre des ressources pédagogiques, des cours en ligne et un suivi de la progression des apprenants.",
    details: "EduGabon est une plateforme e-learning conçue pour démocratiser l'accès à l'éducation de qualité au Gabon. Elle propose des cours structurés, des exercices interactifs et un tableau de bord pour suivre la progression de chaque étudiant.",
    image: "/projects/plateforme educatif.png",
    screenshots: ["/projects/plateforme educatif.png"],
    technologies: ["React", "PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
    featured: true,
    category: "Plateforme",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Responsable Informatique",
    role: "Ministère de la Réforme et les Relations avec les Institutions",
    text: "Emmanuel a fait preuve d'un grand professionnalisme durant son stage. Autonome et rigoureux, il a su s'intégrer rapidement à l'équipe et mener à bien ses missions techniques avec efficacité.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: 2,
    name: "Encadrant de Projet",
    role: "Institut Supérieur de Technologie (I.S.T)",
    text: "Un étudiant sérieux et impliqué. Emmanuel a démontré de réelles compétences en gestion de projet et en développement lors de la réalisation du Système de Gestion des Étudiants.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: 3,
    name: "Collègue de Promotion",
    role: "Licence Professionnelle — I.S.T Libreville",
    text: "Emmanuel est quelqu'un de très fiable et compétent. Sa capacité à résoudre des problèmes techniques complexes et à partager ses connaissances en fait un excellent coéquipier.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];
