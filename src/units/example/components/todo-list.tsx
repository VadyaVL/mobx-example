import * as React from 'react';
import { observer } from 'mobx-react';

import { TodoView } from './todo';
import { TodoListModel } from '../mobx/state';

interface TodoListProps {
  todoList: TodoListModel;
}

@observer
export class TodoList extends React.Component<TodoListProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <ul>
          {
            this.props.todoList.todos.map(todo =>
              <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}