import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import { List } from "./components/List";

import styles from "./App.module.css";
import { useState } from "react";

export function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddNewTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() === "") return;

    setTodos([...todos, newTodo]);
    setNewTodo("");
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
          <List todos={todos} />
        </div>
      </section>
    </main>
  );
}
