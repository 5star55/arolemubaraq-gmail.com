export const profile = {
  firstName: "Mubaraq",
  lastName: "Arole",
  fullName: "Mubaraq Oluwatomisin Arole",
  role: "Software Engineer",
  tagline:
    "Building fast, full-stack web products with Next.js, NestJS and TypeScript.",
  about:
    "Final-year Software Engineering student at Babcock University (4.68/5.0) with a SIWES internship at MTN. Focused on front-end and back-end engineering, with a growing interest in cloud computing and systems design.",
  email: "arolemubaraq@gmail.com",
  location: "Nigeria",
  available: true,
  // Drop a transparent, cut-out portrait at public/me.png and set this to "/me.png".
  photo: "/me.png" as string | null,
  resume: "https://drive.google.com/file/d/18EDhKXK8QNVY_0UOw5MuTSk8_m1F5Y52/view?usp=sharing",
};

export type Social = { label: string; href: string; icon: "github" | "linkedin" | "mail" | "file" };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/5star55", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mubaraq-oluwatomisin-05765235b/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Resume", href: profile.resume, icon: "file" },
];

export type ProjectKind = "Real Project" | "Side Project";

export type Project = {
  slug: string;
  name: string;
  title: string;
  kind: ProjectKind;
  tags: string[];
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  highlights: string[];
  live?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nox-store",
    name: "NOX Store",
    title: "NOX Store - Full-stack E-commerce Store",
    kind: "Real Project",
    tags: ["E-commerce", "Full-stack"],
    summary:
      "A full-stack e-commerce store with product pages, an admin dashboard and a custom cart and checkout flow, used by hundreds of customers.",
    role: "Full-stack Engineer",
    timeline: "Mar - Apr 2026",
    stack: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    highlights: [
      "Built independently, end to end: storefront, product pages and admin dashboard.",
      "Designed a custom cart and checkout flow instead of relying on a hosted checkout.",
      "Shipped to real customers, with hundreds of people shopping on the store.",
    ],
    live: "https://www.nox-vault.store/shop",
    image: "/projects/nox.png",
  },
  {
    slug: "astar-tutorials",
    name: "Astar Tutorials",
    title: "Astar Tutorials - Academic Resource Platform",
    kind: "Real Project",
    tags: ["Web App", "Team"],
    summary:
      "A responsive academic resource website for A-Star Tutorials at Babcock University, used by 500+ students on campus.",
    role: "Frontend Lead",
    timeline: "Jan - Apr 2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Used by 500+ students on campus to find course material.",
      "Implemented a structured UI system for organising course contents.",
      "Collaborated on frontend and component design for a fast, responsive experience.",
    ],
    live: "https://www.astartutorials.com/",
    image: "/projects/astar.png",
  },
  {
    slug: "invoicr",
    name: "Invoicr",
    title: "Invoicr - Freelancer Invoicing & Client Management",
    kind: "Side Project",
    tags: ["SaaS", "Full-stack"],
    summary:
      "A full-stack invoicing and client management app for freelancers, with JWT authentication and ownership-based authorization.",
    role: "Full-stack Engineer",
    timeline: "Jul - Sep 2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "JWT authentication with ownership-based authorization guards, so users can never read each other's data.",
      "Migrated the database from SQLite to PostgreSQL.",
      "Deployed the API to Render and the frontend to Vercel.",
    ],
    live: "https://invoicr-frontend.vercel.app/login",
    image: "/projects/invoicr.png",
  },
  {
    slug: "dars",
    name: "DARS",
    title: "DARS - Report & Proposal Workflow Platform",
    kind: "Real Project",
    tags: ["Platform", "Team Lead"],
    summary:
      "A report and proposal workflow platform used by every student directorate on campus, built by the Computing Club frontend team I lead.",
    role: "Frontend Lead",
    timeline: "Aug 2026 - Now",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    highlights: [
      "Report submission, proposal approvals, dashboards and role-based access control.",
      "Used by all student directorates on campus.",
      "Led an 8-member frontend team organised into skill-based tiers.",
    ],
  },
  {
    slug: "acadex",
    name: "Acadex",
    title: "Acadex - Student Course Material Vault",
    kind: "Side Project",
    tags: ["MVP", "Full-stack"],
    summary:
      "An MVP platform where students upload and download course materials, designed and built solo from end to end.",
    role: "Solo Full-stack Engineer",
    timeline: "Apr - May 2026",
    stack: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    highlights: [
      "Designed and built the whole product solo, from UI to data.",
      "Authentication so students can manage their own uploads.",
      "Upload and download flows for course materials.",
    ],
    live: "https://acadex-ten.vercel.app/",
    image: "/projects/acadex.png",
  },
  {
    slug: "favo",
    name: "FAVO",
    title: "FAVO - Movie Favourites Web App",
    kind: "Side Project",
    tags: ["Web App", "API"],
    summary:
      "A movie discovery app on the TMDB API, giving search access to 1.3M+ movies with bookmarks saved locally.",
    role: "Frontend Engineer",
    timeline: "Aug - Sep 2025",
    stack: ["React", "CSS", "TMDB API"],
    highlights: [
      "Search across a catalogue of 1.3M+ movies via the TMDB API.",
      "Save and bookmark favourites with Local Storage, with no backend or auth needed.",
      "Deployed on Vercel.",
    ],
    live: "https://favo-sand.vercel.app/",
    image: "/projects/favo.png",
  },
  {
    slug: "hear-me",
    name: "Hear Me",
    title: "Hear Me - Mental Health Support Website",
    kind: "Side Project",
    tags: ["Web App", "Wellbeing"],
    summary:
      "A self-assessment platform that helps students reflect on stress and anxiety and points them to coping resources and support services.",
    role: "Designer & Developer",
    timeline: "Oct - Nov 2024",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Guided self-assessment for stress and anxiety symptoms.",
      "Directs students to relevant coping resources or support services.",
    ],
    live: "https://hear-me-phi.vercel.app/",
    image: "/projects/hearme.png",
  },
  {
    slug: "campus-connect",
    name: "CampusConnect",
    title: "CampusConnect - Lost & Found for Campus",
    kind: "Real Project",
    tags: ["Web App", "Team Lead"],
    summary:
      "A platform for students to report and recover lost items, built and launched by a team of five I led.",
    role: "Team Lead",
    timeline: "Feb - Mar 2024",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Led a team of 5 students from idea to launch.",
      "Students can report lost items and recover found ones.",
    ],
    live: "https://driftwood-b-com.onrender.com/",
    image: "/projects/lostfound.png",
  },
];

export type Service = { title: string; description: string; image?: string };

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive, fast interfaces in Next.js and React, with component systems that scale.",
    image: "/projects/astar.png",
  },
  {
    title: "Full-stack Web Apps",
    description:
      "End-to-end products: data, auth, dashboards and checkout flows, shipped to real users.",
    image: "/projects/nox.png",
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs in NestJS with Prisma and PostgreSQL, secured with JWT and ownership guards.",
    image: "/projects/invoicr.png",
  },
  {
    title: "Cloud DevOps",
    description:
      "Deploying and running apps on Azure, with CI/CD pipelines, containers and monitoring that keep releases smooth.",
  },
];

export type Experience = { org: string; role: string; period: string; image?: string };

export const experience: Experience[] = [
  { org: "Babcock University Computing Club", role: "Frontend Lead", period: "Aug 2026 - Now" },
  { org: "MTN Nigeria", role: "Software Engineer Intern", period: "Jan 2026 - Jun 2026" },
  { org: "NOX Store", role: "Full-stack Engineer", period: "Mar 2026 - Apr 2026", image: "/projects/nox.png" },
  { org: "Astar Tutorials", role: "Frontend Lead", period: "Jan 2026 - Apr 2026", image: "/projects/astar.png" },
  { org: "Babcock University", role: "BSc Software Engineering - 4.68/5.0", period: "Final year" },
];

export const skills = [
  "TypeScript", "JavaScript", "Python", "React", "Next.js", "NestJS", "Node.js",
  "React Native", "Expo", "Prisma", "PostgreSQL", "Supabase", "Convex",
  "Tailwind CSS", "REST APIs", "Git", "Linux", "Azure", "Power BI",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
