import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoModel } from '../mobx/state';

interface TodoProps {
  todo: TodoModel;
}

const TodoCmp: React.StatelessComponent<TodoProps> = ({
  todo,
}) => (
  <li>
      <input
          type='checkbox'
          checked={todo.finished}
          onChange={() => todo.finished = !todo.finished}
      />{todo.title}
  </li>
);

export const TodoView = observer(TodoCmp);
