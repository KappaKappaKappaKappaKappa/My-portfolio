import logoIzumrudniyGorod from "../images/placeLogos/izumrudniy-gorod.jpg";
import logoPracticum from "../images/placeLogos/logoPracticum.jpg";
import logoYandex from "../images/placeLogos/yandexLogo.svg";

interface PlaceInfo {
  logoAlt: string;
  logoLink: string;
  namePlace: string;
  task: string;
  period: string;
  location: string;
  tasks: string[];
  stack: string[];
  instruments: string[];
  achievements: string[];
}

const PlacesInfo: PlaceInfo[] = [
  {
    logoLink: logoIzumrudniyGorod,
    logoAlt: "Логотип РБООИ Изумрудный город",
    namePlace: "РБООИ Изумрудный город.",
    task: "Frontend-разработчик. Разработка мнофогункционального сайта для организации",
    period: "Ноябрь 2023 — Февраль 2024",
    location: "Россия, Москва",
    tasks: [
      "- Верстал сложные адаптивные, кросс-платформенные страницы с нуля",
      "- Разработал компоненты UI-kit и писал для них документацию",
      "- Интегрировал back-end",
      "- Занимался code-review",
      "- Коммуницировал с дизайнером и заказчиком, вносил конструктивные предложения",
    ],
    achievements: [
      "- Получил опыт работы в команде (5 frontend-разработчиков, 5 backend-разработчиков, Team-Lead, дизайнер)",
      "- Узнал как проектируются и разрабатываеются коммерческие проекты",
      "- Изучил новые технологии такие как: Next.js, Tailwind",
    ],
    stack: [
      "• JavaScript",
      "• TypeScript",
      "• React",
      "• Next.js",
      "• Tailwind",
    ],
    instruments: [
      "• Figma",
      "• Visual Studio Code",
      "• Server-Side Rendering",
      "• Feature-Sliced Design",
    ],
  },

  {
    logoLink: logoYandex,
    logoAlt: "Логотип Яндекса",
    namePlace: "Яндекс.Мастерская",
    task: "Frontend - разработчик. Проектное участие в разработке внутреннего сервиса “Трекер развития” Яндекс Практикума.",
    period: "Октябрь 2023 — Декабрь 2023",
    location: "Россия, Москва",
    tasks: [
      "- Верстал сложные интерфейсы в соответствии с макетом с помощью SCSS Modules",
      "- Реализовал интеграцию с backend",
      "- Кастомизировал Material-UI",
      "- При реализации проекта использовал Typescript, а для хранения данных использовал Redux ToolKit",
    ],
    achievements: [
      "- Получил опыт работы в команде (2 frontend-разработчика, 2 backend-разработчика, дизайнер)",
      "- Изучил новые технологии такие как: MaterialUI, TypeScript, SASS",
      "- Научился создавать сложные компоненты с нуля",
    ],
    stack: ["• JavaScript", "• TypeScript", "• SASS", "• React"],
    instruments: [
      "• Figma",
      "• Visual Studio Code",
      "• Vite",
      "• ReduxToolKit",
    ],
  },

  {
    logoLink: logoPracticum,
    logoAlt: "Логотип Яндекс Практикум",
    namePlace: "Яндекс Практикум",
    task: "Frontend / Fullstack - разработчик (обучение)",
    period: "Ноябрь 2022 — Октябрь 2023",
    location: "Россия, Москва",
    tasks: [
      "- Изучение теоритической информации",
      "- Практическое применение полученных навыков",
      "- Разработка учебных проектов",
    ],
    achievements: [
      "- Создал 3 больших проекта с использованием современных технологий",
      "- Создаю pet-проекты на основе полученных знаний",
      "- Научился создавать адаптивные веб приложения и работать с макетом",
      "- Узнал очень много нового и научился применять полученные знания на практике",
    ],
    stack: [
      "• HTML 5",
      "• CSS 3",
      "• JavaScript",
      "• React",
      "• Node.js",
      "• Express.js",
    ],
    instruments: [
      "• Figma",
      "• Visual Studio Code",
      "• Webpack",
      "• Figma",
      "• Parcel",
      "• Методология БЭМ",
      "• MongoDB",
    ],
  },
];

export default PlacesInfo;
