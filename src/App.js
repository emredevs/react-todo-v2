import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  const [todos, setTodos] = useState([]);

  const handleRemoveTodo = (index) => {
    setTodos((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };
  const handleCheckTodo = (index, e) => {
    console.log(index, e);
    setTodos((prev) => {
      return prev.map((todo, i) => {
        if (i == index) {
          return { ...todo, checked: e };
        }
        return todo;
      });
    });
  };
  return (
    <div className="App">
      <div className="todoContainer">
        <Header />
        <Form addNote={(todo) => setTodos((prev) => [todo, ...prev])} />
        <List
          list={todos}
          onRemoveTodo={handleRemoveTodo}
          onCheckTodo={handleCheckTodo}
        />
      </div>
    </div>
  );
}

export default App;
