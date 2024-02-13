import React from "react";
import PracticeArticle from "./PrecticeArticle";

interface PracticeProps {
  isEnlishVersion: boolean;
}

const Practice: React.FC<PracticeProps> = ({ isEnlishVersion }) => {
  return (
    <section className="practice">
      <h2 className="practice__title">
        {isEnlishVersion ? "Development experience" : "Опыт разработки"}
      </h2>
      <PracticeArticle />
    </section>
  );
};

export default Practice;
