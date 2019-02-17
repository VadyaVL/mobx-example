import { observable, computed, action } from 'mobx';

export class TaskModel {
  public id: number = Math.random();

  @observable
  public title: string;
  @observable
  public dateTime: string;
  @observable
  public finished: boolean = false;
  
  constructor (title: string = '', dateTime: string) {
    this.title = title;
    this.dateTime = dateTime;
  }

  
  @action
  public markAsFinished(): void {
    this.finished = true;
  }
}

export class TaskListModel {
  @observable
  public tasks: TaskModel[] = [];
  
  @computed
  public get unfinishedTodoCount(): number {
    return this.tasks.filter(todo => !todo.finished).length;
  }

  @action
  public addTask(newTodo: TaskModel): void {
    this.tasks.push(newTodo);
  }
}

export const taskListStore = new TaskListModel();
