import { observable, computed, action } from 'mobx';

export class TodoModel {
  public id: number = Math.random();

  @observable
  public title: string = '';
  
  @observable
  public finished: boolean = false;
}

export class TodoListModel {
  @observable
  public todos: TodoModel[] = [];
  
  @computed
  public get unfinishedTodoCount(): number {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  public addTodo(newTodo: TodoModel): void {
    this.todos.push(newTodo);
  }
}
