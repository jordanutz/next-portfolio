import { SiSass, SiNpm, SiReact, SiJavascript } from "react-icons/si";

import { GiLaptop } from "react-icons/gi";

export const data = [
   {
      id: 1,
      title: "Quiz Time",
      year: "2021",
      description:
         "Intuitive trivia game that tests players on their knowledge of video games.",
      image: "https://i.ibb.co/TcGZYQX/FA0890-A4-1-A62-4-FBD-81-F9-CDA0554-ADAF1-1-201-a.jpg",
      technologies: [
         { id: 1, title: "React", icon: <SiReact /> },
         { id: 2, title: "Sass", icon: <SiSass /> },
         { id: 3, title: "Axios", icon: <SiNpm /> },
         { id: 4, title: "Open Trivia API", icon: <GiLaptop /> },
      ],
      github: "https://github.com/jordanutz/quiz-time",
      codepen: "https://codepen.io/jordanutz/pen/mdOPWpE",
   },
   {
      id: 2,
      title: "Calculator",
      year: "2021",
      image: "https://i.ibb.co/rQrPr7Y/E68-A33-BE-7917-4-FA2-9-C3-D-D1-EDF4-F1-BB73-1-105-c.jpg",
      description:
         "React powered calculator with a stylish and accessible interface.",
      technologies: [
         { id: 4, title: "React", icon: <SiReact /> },
         { id: 5, title: "JavaScript", icon: <SiJavascript /> },
         { id: 6, title: "Sass", icon: <SiSass /> },
      ],
      github: "https://github.com/jordanutz/react-calculator",
      codepen: "https://codepen.io/jordanutz/pen/vYyZrwb",
   },
   {
      id: 3,
      title: "WeatherFi",
      year: "2021",
      image: "https://i.ibb.co/2vBf60S/Screen-Shot-2021-09-26-at-12-07-30-PM.jpg",
      description: "Application that generates the three day weather forecast.",
      walkthrough: null,
      technologies: [
         { id: 7, title: "React", icon: <SiReact /> },
         { id: 8, title: "Sass", icon: <SiSass /> },
         { id: 9, title: "Axios", icon: <SiNpm /> },
         { id: 10, title: "WeatherAPI", icon: <GiLaptop /> },
      ],
      github: "https://github.com/jordanutz/weatherfi-2.0",
      codepen: "https://codepen.io/jordanutz/pen/RwozxwG",
      portfolio: true,
   },
];
