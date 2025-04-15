import { Item } from "./Item";

type Todo = {
  id: string;
  text: string;
};

type ListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};
export function List({ todos, onDelete }: ListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}
