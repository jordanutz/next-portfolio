import { Gi3DGlasses, GiPaintBrush } from "react-icons/gi";
import { DiDatabase } from "react-icons/di";

export const data = [
  {
    id: 0,
    title: "Front-End Development",
    icon: <GiPaintBrush />,
    description:
      "I embrace modern languages and frameworks to deliver exceptional user interfaces that are responsive and cross-compatible.",
    technologies: [
      { id: 1, title: "HTML5" },
      { id: 2, title: "CSS3" },
      { id: 3, title: "JavaScript" },
      { id: 4, title: "React" },
      { id: 5, title: "Redux" },
      { id: 6, title: "TypeScript" },
    ],
  },
  {
    id: 1,
    title: "Back-End Development",
    icon: <DiDatabase />,
    description:
      "I am passionate about writing clean, efficient server-side solutions, and developing/testing API's designed to scale.",
    technologies: [
      { id: 1, title: "Node.js" },
      { id: 2, title: "MongoDB" },
      { id: 3, title: "Express" },
      { id: 4, title: "Nodemon" },
      { id: 5, title: "Mongoose" },
    ],
  },
  {
    id: 2,
    title: "Workflow",
    icon: <Gi3DGlasses />,
    description:
      "I rely on a versatile arsenal of management tools and browser extensions to boost my precision and productivity.",
    technologies: [
      { id: 1, title: "Git" },
      { id: 2, title: "Agile" },
      { id: 3, title: "Visual Studio Code" },
      { id: 4, title: "Github" },
      { id: 5, title: "Chrome DevTools" },
      { id: 6, title: "Postman" },
    ],
  },
];
