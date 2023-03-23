import React from "react";
import styles from "./list.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
export default function List({ list, onRemoveTodo, onCheckTodo }) {
  dayjs.extend(relativeTime);
  const handleCheck = (index, event) => {
    onCheckTodo(index, event.target.checked);
  };
  return (
    <div>
      <ul className={styles.ul}>
        {list.map((todoItem, index) => (
          <li className={styles.li} key={index}>
            <label className={styles.label} htmlFor={index}>
              {todoItem.todo}
              <p className={styles.noteDate}>
                {dayjs(todoItem.date).fromNow()}
              </p>
            </label>
            <div>
              <input
                className={styles.check}
                type="checkbox"
                id={index}
                checked={todoItem.checked}
                onChange={(e) => handleCheck(index, e)}
              />
              <img onClick={() => onRemoveTodo(index)} src="/img/delete.jpg" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
