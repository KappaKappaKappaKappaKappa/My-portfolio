import mestoImg from "../images/projectsPreview/mesto.png";
import moviesExplorerImg from "../images/projectsPreview/movies-explorer-img.png";
import yandexTracker from "../images/projectsPreview/yandexTracker.png";
import izumrudnitGorod from "../images/projectsPreview/izumrudniyGorod.png";
import myPortfolio from "../images/projectsPreview/myPortfolio.png";

interface TCardsReactInfo {
  img: string;
  title: string;
  description: string;
  stack: string[];
  githubLinks: string;
  site?: string;
}

const CardsReactInfo: TCardsReactInfo[] = [
  {
    img: yandexTracker,
    title: "Трекер развития Яндекс Практикум",
    description:
      "Инновационный инструмент для эффективного и удобного обучения. Трекер предназначен для студентов, стремящихся к максимальной прозрачности в процессе обучения. Одними из основных преимуществ нашего продукта являются отслеживание процесса и прогресса обучения и возможность совставления плана обучения",
    stack: [
      "JavaScrips",
      "TypeScript",
      "React",
      "React-Router v6",
      "Redux ToolKit",
      "SCSS",
      "Vite",
    ],
    githubLinks: "https://github.com/KappaKappaKappaKappaKappa/practicum-HACK",
  },
  {
    img: izumrudnitGorod,
    title: "Проект Изумрудный город.",
    description:
      "Проект представляет собой сайт центра адаптации и развития Изумрудный город. Проектирование и разработка многофункционального сайта для организации.",
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Server-Side Rendering",
      "Tailwind",
      "Feature-Sliced Design",
    ],
    githubLinks: "https://github.com/izumrudnyygorod/frontend",
  },
  {
    img: myPortfolio,
    title: "Мое портфолио",
    description:
      "Это мое портфолио, где я демонстрирую свои проекты и навыки. В данный момент вы смотрите именно этот проект, надеюс он вам нравится (:",
    stack: ["HTML5", "CSS3", "JavaScrips", "React", "БЭМ"],
    githubLinks: "https://github.com/KappaKappaKappaKappaKappa/My-portfolio",
    site: "https://kappakappakappakappakappa.github.io/My-portfolio/",
  },
  {
    img: moviesExplorerImg,
    title: "Проект Поисковик фильмов",
    description:
      "Movies Explorer - сайт с собственным и сторонним API для поиска и сохранения фильмов. Есть возможность регистрации и авторизации пользователя. Поиск фильмов производится по базе данных, результаты поиска сохраняются. Фильмы можно добавлять в 'избранное', сохранённые фильмы можно просматривать и удалять из 'избранных'. Присутствует фильтрация фильмов по хронометражу.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScrips",
      "React",
      "Express.js",
      "Local Storage",
      "API",
    ],
    githubLinks:
      "https://github.com/KappaKappaKappaKappaKappa/movies-explorer-frontend",
  },
  {
    img: mestoImg,
    title: "Проект Место",
    description:
      "Сервис Место с собственным API представляющий собой веб-страницу-хранилище карточек пользователей с возможность регистрироваться, авторизовываться, добавлять и удалять карточки, ставить лайки, менять данные профиля и аватар.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScrips",
      "React",
      "Express.js",
      "Cookies",
      "API",
    ],
    githubLinks:
      "https://github.com/KappaKappaKappaKappaKappa/react-mesto-api-full-gha",
  },
];

export default CardsReactInfo;
