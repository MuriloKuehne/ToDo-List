import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      Criar
      <img src="src/assets/Add.svg" alt="" />
    </button>
  );
}
