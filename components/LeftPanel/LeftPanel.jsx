import React from "react";
import css from "./LeftPanel.module.css";
import { ListPanelButton } from "../ListPanelButton/ListPanelButton";

export const LeftPanel = (props) => {
  return (
    <div className={css.panel} style={{ height: `${props.height}px` }}>
      <ListPanelButton />
    </div>
  );
};
