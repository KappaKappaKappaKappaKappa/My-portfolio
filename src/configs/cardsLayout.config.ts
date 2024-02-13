import russianTravelImg from "../images/projectsPreview/russianTravelImg.png";
import howToLearnImg from "../images/projectsPreview/howToLearnImg.png";
import testJobImg from "../images/projectsPreview/test-job-img.png";

interface CardsInfo {
  img: string;
  title: string;
  description: string;
  githubLink: string;
}

const CardsLatoutInfo: CardsInfo[] = [
  {
    img: russianTravelImg,
    title: "Проект Путешествия по России",
    description:
      "Проект о путешествии по России. Одностраничный сайт с адаптивным дизайном свёрстанный по макету.",
    githubLink: "https://kappakappakappakappakappa.github.io/russian-travel/",
  },
  {
    img: howToLearnImg,
    title: "Проект Научиться учиться",
    description:
      "Простой одностаничный сайт написанный на HTML и CSS с использованием CSS-анимаций.",
    githubLink: "https://kappakappakappakappakappa.github.io/how-to-learn/",
  },
  {
    img: testJobImg,
    title: "Лендинг страница",
    description:
      "Тестовое задание от компании amoCRM. Лендинг страница для разрешений экрана: 1440px и 320px.",
    githubLink: "https://kappakappakappakappakappa.github.io/test-job/",
  },
];

export default CardsLatoutInfo;
