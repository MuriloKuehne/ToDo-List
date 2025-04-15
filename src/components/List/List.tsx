import { Item } from "./Item";

type ListProps = {
  todos: string[];
};

export function List({ todos }: ListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Item key={index} text={todo} />
      ))}
    </ul>
  );
}
