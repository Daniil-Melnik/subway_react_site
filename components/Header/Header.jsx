import React from "react";
import css from "./Header.module.css";
import { Nav } from "./Nav/Nav";
import Link from "next/link";

export const Header = (props) => {
  return (
    <header className={css.head}>
      <Link href={"/"}>
        <img className={css.logo_img} src="logo_2.png" />
      </Link>
      <img className={css.logo_spb_img} src="lenin.png" />
      <h1 className={css.main__logo}>Петербургский метрополитен</h1>
      {props.sec_title && <h2 className={css.sec_title}>{props.sec_title}</h2>}
      <Nav />
    </header>
  );
};
