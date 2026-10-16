import coursPortrait from "../assets/cours-portrait.webp";
import nicolasPortrait from "../assets/nicolas-portrait.webp";
import ambianceBis from "../assets/ambiance-bis-repetita.webp";
import cours2Landscape from "../assets/cours-2-landscape.webp";
import homepage from "../assets/homepage.webp";
import studioAtmosphere from "../assets/studio-atmosphere.webp";

export interface ServicePage {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  image: ImageMetadata;
  category: "prive" | "collectif" | "corporate";
}

export const servicePages: ServicePage[] = [
  {
    slug: "coaching-prive",
    title: "Coaching Privé",
    shortDescription: "Un accompagnement sur mesure pour atteindre vos objectifs, du solo au petit groupe.",
    href: "/services/coaching-prive",
    image: coursPortrait,
    category: "prive",
  },
  {
    slug: "coaching-solo",
    title: "Coaching Solo",
    shortDescription: "Séances individuelles construites sur vos objectifs, avec Nicolas de Boccard.",
    href: "/services/coaching-solo",
    image: nicolasPortrait,
    category: "prive",
  },
  {
    slug: "coaching-duo-trio",
    title: "Coaching Duo & Trio",
    shortDescription: "Progressez ensemble grâce à la boxe anglaise, à deux ou trois.",
    href: "/services/coaching-duo-trio",
    image: ambianceBis,
    category: "prive",
  },
  {
    slug: "small-group-training",
    title: "Small Group Training",
    shortDescription: "L'énergie du groupe, la précision du privé. De 4 à 8 personnes.",
    href: "/services/small-group-training",
    image: cours2Landscape,
    category: "prive",
  },
  {
    slug: "coaching-boxe-domicile",
    title: "Coaching à Domicile",
    shortDescription: "Le coach et le matériel viennent chez vous, partout à Genève.",
    href: "/services/coaching-boxe-domicile",
    image: coursPortrait,
    category: "prive",
  },
  {
    slug: "round-by-round",
    title: "Round by Round",
    shortDescription: "Cours collectif structuré en rounds : technique de boxe et préparation physique.",
    href: "/services/round-by-round",
    image: cours2Landscape,
    category: "collectif",
  },
  {
    slug: "corporate",
    title: "Corporate",
    shortDescription: "Team building, cohésion d'équipe et bien-être en entreprise par la boxe.",
    href: "/services/corporate",
    image: studioAtmosphere,
    category: "corporate",
  },
  {
    slug: "boxe-femme",
    title: "Boxe Femme",
    shortDescription: "Cadre privé, intensité ajustée, aucun contact imposé.",
    href: "/services/boxe-femme",
    image: studioAtmosphere,
    category: "prive",
  },
];

export const siteConfig = {
  name: "Bis Repetita",
  description:
    "Studio de boxe sur mesure à Genève. Coaching privé, cours collectifs et programmes corporate avec Nicolas de Boccard.",
  url: "https://bisrepetita.ch",
  lang: "fr",
  locale: "fr_CH",
  author: "Nicolas de Boccard",
  ogImage: "/og_image.png",
  contact: {
    phone: "+41 76 801 25 96",
    email: "contact@bisrepetita.ch",
    address: "La Voie-Creuse 16, 1202 Genève",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/bisrepetitaboxing/",
    linkedin: "https://linkedin.com/company/bisrepetita",
  },
  navCta: {
    text: "Réserver",
    href: "/#planning",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.8!2d6.14!3d46.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEzJzEyLjAiTiA2wrAwOCcyNC4wIkU!5e0!3m2!1sfr!2sch!4v1",
  },
  // Panneau « Cours » de la nav : deux portes, puis les pages secondaires.
  navCours: {
    href: "/services",
    doors: [
      {
        label: "Cours privé",
        href: "/services/coaching-prive",
        items: [
          { text: "Solo", href: "/services/coaching-solo", meta: "1 personne", image: "nicolas-portrait.webp" },
          { text: "Duo & Trio", href: "/services/coaching-duo-trio", meta: "2 ou 3 personnes", image: "lionel-nicolas-boxe.webp" },
          { text: "Small Group", href: "/services/small-group-training", meta: "4 à 8 personnes", image: "cours-2-landscape.webp" },
          { text: "À domicile", href: "/services/coaching-boxe-domicile", meta: "Partout à Genève", image: "ambiance-bis-repetita.webp" },
        ],
      },
      {
        label: "Cours collectif",
        href: "/services/round-by-round",
        items: [
          { text: "Round by Round", href: "/services/round-by-round", meta: "8 max · 50 min · CHF 40", image: "image-cta.webp" },
        ],
      },
    ],
    more: [
      { text: "Corporate", href: "/services/corporate" },
      { text: "Boxe femme", href: "/services/boxe-femme" },
      { text: "Offrir un cours", href: "/offrir-un-cours" },
    ],
  },
  navLinks: [
    { text: "Studio", href: "/studio" },
    { text: "Tarifs", href: "/tarifs" },
    { text: "Planning", href: "/#planning" },
    { text: "Journal", href: "/blog" },
  ],
  footerLinks: {
    services: [
      { text: "Coaching Privé", href: "/services/coaching-prive" },
      { text: "Coaching Solo", href: "/services/coaching-solo" },
      { text: "Coaching Duo & Trio", href: "/services/coaching-duo-trio" },
      { text: "Small Group Training", href: "/services/small-group-training" },
      { text: "Coaching à Domicile", href: "/services/coaching-boxe-domicile" },
      { text: "Round by Round", href: "/services/round-by-round" },
      { text: "Corporate", href: "/services/corporate" },
      { text: "Boxe Femme", href: "/services/boxe-femme" },
      { text: "Offrir un cours", href: "/offrir-un-cours" },
    ],
    infos: [
      { text: "Studio", href: "/studio" },
      { text: "Nicolas de Boccard", href: "/equipe/nicolas-de-boccard" },
      { text: "Tarifs", href: "/tarifs" },
      { text: "Blog", href: "/blog" },
      { text: "Cours de Boxe Genève", href: "/cours-de-boxe-geneve" },
      { text: "CGV", href: "/cgv" },
    ],
  },
};
