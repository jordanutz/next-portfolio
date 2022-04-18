import { SiSass, SiNpm, SiReact, SiJavascript } from "react-icons/si";

import { GiLaptop } from "react-icons/gi";

import QuizImg from "../public/quiz.webp";
import CalculatorImg from "../public/calculator.webp";
import WeatherImg from "../public/weather.webp";

export const data = [
   {
      id: 1,
      title: "Quiz Time",
      year: "2021",
      description:
         "Intuitive trivia game that tests players on their knowledge of video games.",
      image: QuizImg,
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
      image: CalculatorImg,
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
      image: WeatherImg,
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
