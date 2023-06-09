import React from "react";
import css from "./WideCard.module.css";

export const WideCard = () => {
  return (
    <div className={css.card}>
      <h1 className={css.title}>Подвижной состав метрополитена</h1>
      <hr className={css.hr}></hr>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;На этой странице Вы можете наблюдать краткий
        список основных моделей подвижного состава Ленинградской подземки,
        эксплуатирующихся в данный ммомент времени, включающий в себя сем
        элементов, начиная с самой "пожилой" - модли "Ем", заканчивая самой
        современной - Балтиец.
      </p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;Список прдставляет набор карточек с кратким
        описанием модели, в которое водят числовой индекс модели, её буквнное
        обозначение год начала экслуатации и эмблемы линий метрополитена, на
        которых они используюются.
      </p>
      <p className={css.txt}>
        &nbsp;&nbsp;&nbsp;&nbsp;О каждой модели можно узнать больше информации,
        нажав на её изображение в списке.
      </p>
    </div>
  );
};
