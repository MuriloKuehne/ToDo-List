import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={styles.container}
      placeholder="Adicione uma nova tarefa..."
    />
  );
}
