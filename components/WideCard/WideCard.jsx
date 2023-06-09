import React from "react";
import css from "./WideCard.module.css";

export const WideCard = () => {
  return (
    <div className={css.card}>
      <h1 className={css.title}>О чём этот сайт</h1>
      <hr className={css.hr}></hr>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Главной целью создания данного интернет-ресурса
        является упорядочивание большого количества информации о Петербургском
        (Ленинградском) метрополитене.
      </p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Здесь Вы можете найти информацию о Петербургской
        подземке, в том числе историю метрополитена (в разделе "История"), его
        станций (в разделе "Линии и станции") и подвижного состава (в разделе
        "Подвижной состав").
      </p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Вам доступна галерея (раздел "Галерея"), в
        которой представлены фотографии различных эпох, актуальная схема линий
        (раздел "Схема метрополитена").
      </p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Помимо всего прочего, присутсвует таблица всех
        станций метро с краткими характеристиками (раздел "Характеристики"), по
        которой можно легко анализировать особенности метрополитена города на
        Неве, выделяющегося на фоне свих аналогов.
      </p>
    </div>
  );
};
