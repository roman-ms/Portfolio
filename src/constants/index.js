import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  skif,
  starbucks,
  caterpillar,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Art,
  Music,
  Programming,
  Learning
} from "../assets";

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
    title: "Artist",
    icon: Art,
  },
  {
    title: "Developer",
    icon: Programming,
  },
  {
    title: "Musician",
    icon: Music,
  },
  {
    title: "Engineer",
    icon: Learning,
  },
];

const socials = [
  {
    name: "instagram",
    model: "/Socials/Instagram.glb",
    link: "https://www.instagram.com/familyfriendlyroma/"
  },
  {
    name: "Linkedin",
    model: "/Socials/LinkedIn.glb",
    link: "https://www.linkedin.com/in/roman-meshkov/"
  },
  {
    name: "GitHub",
    model: "/Socials/GitHub.glb",
    link: "https://github.com/roman-ms"
  },
  {
    name: "SoundCloud",
    model: "/Socials/SoundCloud.glb",
    link: "https://soundcloud.com/romableepbloop"
  },
  {
    name: "Twitter",
    model: "/Socials/Twitter.glb",
    link: ""
  },
  {
    name: "Youtube",
    model: "/Socials/Youtube.glb",
    link: ""
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Research",
    company_name: "Caterpillar",
    icon: caterpillar,
    iconBg: "black",
    date: "March 2023 - Present",
    points: [
      "Conducting 50+ interviews with Caterpillar employees of different levels",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Wireframing applications based on companies needs and conducted research.",
      "Presenting ideas and wireframes to targeted users and the board of stakeholders.",
    ],
  },
  {
    title: "System Administrator",
    company_name: "Skif-DV",
    icon: skif,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Setting up and maintaining office equipment.",
      "Implemented and managed a storage for documentation and data.",
      "Maitaining local office server.",
      "Participated in staff meetings and presented reports on the executed work.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Maitanance & Reliability",
    description:
      "Project aims to combine two largest Caterpillar web applications into one. Basing UI/UX decisions on over 50 interviews with employees, dealers and customers. Working through wireframes considering feedback from the second round of interviews and stackeholder meetings.",
    tags: [
      {
        name: "mural",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "teams",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "CAT Energy",
    description:
      "Consulting project that helps Caterpillar identify solutions for green and reusable energy. Identifying persona in charge of emmissions tracking and suggesting CAT ideas on how to encourage customers to use green solutions.",
    tags: [
      {
        name: "mural",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "teams",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  /*{
    name: "Todo App",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },*/
];

export { services, technologies, experiences, testimonials, projects, socials};
