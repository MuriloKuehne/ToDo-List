import { useState } from "react";
import styles from "./Item.module.css";

import { Trash } from "@phosphor-icons/react";
type ListItemProps = {
  id: string;
  text: string;
  onDelete: (id: string) => void;
};

export function Item({ id, text, onDelete }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className={styles.listItem}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className={styles.checkbox}
        />
        <img
          src={isChecked ? "src/assets/checked.svg" : "src/assets/check.svg"}
          alt=""
        />
        <span className={`${styles.text} ${isChecked ? styles.checked : ""}`}>
          {text}
        </span>
      </label>

      <button className={styles.trash} onClick={() => onDelete(id)}>
        <Trash size={20} className={styles.trashIcon} />
      </button>
    </li>
  );
}
