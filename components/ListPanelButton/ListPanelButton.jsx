import React from "react";
import css from "./ListPanelButton.module.css";
import { PanelButton } from "../PanelButton/PanelButton";

export const ListPanelButton = () => {
  return (
    <ul className={css.ul}>
      <li>
        <PanelButton href="" title="История" top="2%" left="27%"></PanelButton>
      </li>
      <li>
        <PanelButton
          href=""
          title="Схема метрополитена"
          top=""
          left="0"></PanelButton>
      </li>
      <li>
        <PanelButton
          href="/trains"
          title="Подвижной состав"
          top="14%"
          left="0"></PanelButton>
      </li>
      <li>
        <PanelButton
          href="/lines"
          title="Линии и станции"
          top="19.8%"
          left="3%"></PanelButton>
      </li>
      <li>
        <PanelButton
          href=""
          title="Галерея"
          top="25.7%"
          left="28%"></PanelButton>
      </li>
      <li>
        <PanelButton
          href=""
          title="Интересные факты"
          top="31.5%"
          left="0"></PanelButton>
      </li>
      <li>
        <PanelButton
          href=""
          title="Характеристики"
          top="37.4%"
          left="7%"></PanelButton>
      </li>
    </ul>
  );
};
