import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__content">
        <SectionTitle title="О проекте" />
        <div className="about-project__info">
          <article className="about-project__info-item">
            <p className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about-project__info-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </article>
          <article className="about-project__info-item">
            <p className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about-project__info-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__timeline-item about-project__timeline-item_type_back-end">
            <p className="about-project__timeline-term about-project__timeline-term_type_back-end">
              1 неделя
            </p>
            <p className="about-project__timeline-description">Back-end</p>
          </div>
          <div className="about-project__timeline-item about-project__timeline-item_type_front-end">
            <p className="about-project__timeline-term about-project__timeline-term_type_front-end">
              4 недели
            </p>
            <p className="about-project__timeline-description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
