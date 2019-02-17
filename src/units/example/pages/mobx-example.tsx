import * as React from 'react';

import './mobx-example.scss'
import { TodoListModel, TodoModel } from '../mobx/state';
import { TodoList } from '../components';
import { CreateTodoForm } from '../components/create-todo-form';

const store = new TodoListModel();

export class MobXExamplePage extends React.Component {

  private onAdd = (newTodo: TodoModel) => {
    store.addTodo(newTodo);
  };

  public render(): React.ReactNode {
    return (
      <div>
        <CreateTodoForm onAdd={this.onAdd} />
        <TodoList todoList={store} />
      </div>
    );
  }
}
