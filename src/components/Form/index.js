import styles from "./form.module.css";
export default function Form({ addNote }) {
  const formSubmit = (e) => {
    e.preventDefault();

    const todoInput = e.target["todo-input"];
    if (!todoInput.value) {
      return;
    }

    addNote({
      todo: todoInput.value,
      date: new Date(),
      checked: false,
    });
    todoInput.value = "";
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className={styles.formBox}>
          <input
            name="todo-input"
            placeholder="Note..."
            className={styles.input}
          />
          <button className={styles.submitBtn}>Add Note</button>
        </div>
      </form>
    </div>
  );
}
