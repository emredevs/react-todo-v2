import React from "react";
import styles from "./header.module.css";
export default function Header() {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className={styles.containerHeader}>
      <img src="/img/headerbg.jpg" />
      <div className={styles.date}>
        <h4 className={styles.day}>
          {days[date.getDay()]} {date.getDate()}
        </h4>
        <h2 className={styles.time}>
          {date.getHours()}:{date.getMinutes()}{" "}
          {date.getHours() > 12 ? "PM" : "AM"}
        </h2>
      </div>
    </div>
  );
}
