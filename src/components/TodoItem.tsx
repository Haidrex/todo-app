import React from "react";

type Todo = {
  id: number;
  name: string;
  state: string;
};

type Props = {
  todo: Todo;
};

const TodoItem = (props: Props) => {
  return (
    <div>
      <span>Pavadinimas</span>
    </div>
  );
};

export default TodoItem;
