import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src="../src/assets/Logo.svg" />
    </header>
  );
}
