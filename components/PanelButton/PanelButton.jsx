import React from "react";
import css from "./PanelButton.module.css";
import Link from "next/link";

export const PanelButton = (props) => {
  function handleClick() {
    window.location(props.href);
  }
  return (
    <div className={css.PanelButton}>
      <Link
        style={{
          position: "absolute",
          top: `${props.top}`,
          left: `${props.left}`,
        }}
        href={props.href}
        className={css.PanelButton_text}>
        {props.title}
      </Link>
    </div>
  );
};
