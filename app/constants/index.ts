export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Developer",
    icon: "/backend.webp",
  },
  {
    title: "Full Stack (MERN) Web Developer",
    icon: "/web.webp",
  },
  {
    title: "Lead Frontend Developer",
    icon: "/mobile.webp",
  },
  {
    title: "Frontend Architect",
    icon: "/creator.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "SCSS",
    icon: "/tech/scss.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
  },
  {
    name: "Mongo DB",
    icon: "/tech/mongo.png",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "Lead Frontend Developer",
    company_name: "Codewave Technologies",
    icon: "/company/codewave.png",
    iconBg: "#383E56",
    date: "Mar 2024 - Present",
    points: [
      "Leading the entire frontend team for a revenue-impacting product, ensuring delivery excellence.",
      "Managing a team of 4 developers, driving productivity, code quality, and collaboration.",
      "Setting the technical foundation for projects with decisions on stack, architecture, and coding standards.",
      "Spearheading key frontend decisions to ensure scalability, maintainability, and high performance.",
      "Contributing directly to execution with hands-on coding, mentoring, and stakeholder communication.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Codewave Technologies",
    icon: "/company/codewave.png",
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Mar 2024",
    points: [
      "Architected modern frontend applications using React, TypeScript, Redux, and TailwindCSS.",
      "Developed reusable UI component libraries to improve development speed and design consistency.",
      "Acted as a technical bridge between clients and internal teams for clarifications and requirement discussions.",
      "Mentored developers and conducted code reviews to maintain engineering standards.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Codewave Technologies",
    icon: "/company/codewave.png",
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Sep 2023",
    points: [
      "Converted Figma designs into responsive, pixel-perfect web interfaces.",
      "Integrated REST APIs and managed front-to-back workflows across multiple projects.",
      "Improved UI/UX consistency across modules while maintaining clean, reusable code.",
      "Actively contributed to team sprints, problem-solving, and technical discussions.",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "4Dots Agency",
    icon: "/company/4dots.png",
    iconBg: "#383E56",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Built scalable and maintainable web applications using React and TypeScript.",
      "Integrated RESTful & GraphQL APIs to deliver dynamic, data-driven interfaces.",
      "Debugged and resolved UI issues to ensure cross-browser performance and smooth user experience.",
      "Collaborated with backend developers, designers, and QA teams for seamless project execution.",
    ],
  },
];

const testimonials = [
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Sandip Dhang",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/sandip-dhang/",
  },

  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Sandip Dhang",
    image: "/tech/github.webp",
    link: "https://github.com/SandipDhang",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Sandip Dhang",
    image: "/socialmedia/portfolio.svg",
    link: "https://omthecreator.netlify.app/",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "Hosted AI",
    description:
      "GPU-accelerated cloud platform for AI model training and deployment, offering scalable resources and seamless integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/hostedai.svg",
    platform: "Web",
    deploy_link: "https://hosted.ai/",
  },
  {
    name: "NIUM Checkout",
    description:
      "A modern, responsive checkout page for NIUM's payment gateway, built with Next.js and Tailwind CSS to ensure seamless user experience across devices.",
    tags: [
      {
        name: "next",
        color: "red-text-gradient",
      },
      {
        name: "Next UI",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/nium.png",
    platform: "Web",
    deploy_link: "https://www.nium.com/",
  },
  {
    name: "Emint",
    description: "A investment platform",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/emint.png",
    platform: "Web",
    deploy_link: "https://emint.in/",
  },
  {
    name: "CPT Markets",
    description:
      " Designed and developed a visually appealing and user-friendly website for CPT Markets, a financial trading company, using React for dynamic content rendering and Material-UI for a consistent and responsive design.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/cptmarkets.png",
    platform: "Web",
    deploy_link: "https://cptmarkets.com/en",
  },
  {
    name: "SpeedLegal",
    description:
      "AI-powered contract review platform helping users instantly detect risks and understand agreements with clarity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/speedlegal.png",
    platform: "Web",
    deploy_link: "https://speedlegal.io/",
  },
  {
    name: "M-Square",
    description:
      "A Next.JS Full Stack Application for doctors report and patient report management analysis via AI with authentication and admin dashboard.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "shadCN",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/msquare.png",
    platform: "Web",
    deploy_link: "https://www.biontel.ai/",
  },
];

export { services, technologies, experiences, testimonials, projects };

