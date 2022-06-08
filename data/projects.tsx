import QuizImg from "../public/quiz.webp";
import CalculatorImg from "../public/calculator.webp";
import WeatherImg from "../public/weather.webp";
import OpenGraphImg from "../public/opengraph.webp";

export const data = [
  {
    id: 1,
    title: "Quiz Time",
    year: "2021",
    description:
      "Intuitive trivia game that tests players on their knowledge of video games.",
    image: QuizImg,
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
    github: "https://github.com/jordanutz/react-calculator",
    codepen: "https://codepen.io/jordanutz/pen/vYyZrwb",
  },
  {
    id: 3,
    title: "WeatherFi",
    year: "2021",
    image: WeatherImg,
    description: "Application that generates the three day weather forecast.",
    github: "https://github.com/jordanutz/weatherfi-2.0",
    codepen: "https://codepen.io/jordanutz/pen/RwozxwG",
  },
  {
    id: 4,
    title: "Open Graph Tag Generator",
    year: "2022",
    image: OpenGraphImg,
    description:
      "Application that dynamically generates Open Graph keys using information derived from custom meta keys.",
    github: "https://github.com/jordanutz/open-graph-protocol",
    codepen: null,
  },
];
