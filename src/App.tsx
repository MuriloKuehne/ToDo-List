import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import { List } from "./components/List";

import styles from "./App.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
};

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddNewTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() === "") return;

    const newTodoObject: Todo = {
      id: uuidv4(),
      text: newTodo.trim(),
    };

    setTodos([...todos, newTodoObject]);
    setNewTodo("");
  };

  const handleDeleteTodo = (idToDelete: string) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <Button onClick={handleAddNewTodo} />
        </div>

        <div className={styles.taskList}>
          <List todos={todos} onDelete={handleDeleteTodo} />
        </div>
      </section>
    </main>
  );
}
