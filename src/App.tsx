import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";
export function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button />
        </div>

        <div className={styles.taskList}>{/* list header */}</div>
      </section>
    </main>
  );
}
