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
  },
  {
    id: 2,
    title: "Calculator",
    year: "2021",
    image: CalculatorImg,
    description:
      "React powered calculator with a stylish and accessible interface.",
    github: "https://github.com/jordanutz/react-calculator",
  },
  {
    id: 3,
    title: "WeatherFi",
    year: "2021",
    image: WeatherImg,
    description: "Application that generates the three day weather forecast.",
    github: "https://github.com/jordanutz/weatherfi-2.0",
  },
  {
    id: 4,
    title: "Open Graph Tag Generator",
    year: "2022",
    image: OpenGraphImg,
    description:
      "Application that dynamically generates Open Graph tags using information derived from custom meta keys.",
    github: "https://github.com/jordanutz/open-graph-tag-generator",
  },
];
