import styles from "./Item.module.css";

type ListItemProps = {
  text: string;
};

export function Item({ text }: ListItemProps) {
  return <li className={styles.container}>{text}</li>;
}
