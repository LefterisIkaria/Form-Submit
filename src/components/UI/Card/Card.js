import React from "react";

import styles from "./Card.module.css";

function Card({ children, styleClass }) {
  return <div className={`${styles.card} ${styleClass}`}>{children}</div>;
}

export default Card;
