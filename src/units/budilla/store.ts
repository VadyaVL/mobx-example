import { types, onSnapshot } from 'mobx-state-tree';

const TaskModel = types
  .model('Task', {
    id: types.optional(types.number, Math.random),
    title: types.string,
    dateTime: types.string,
    done: types.optional(types.boolean, false),
  })
  .actions(self => ({
    markAsDone: () => { self.done = true; },
    changeDone: (val: boolean) => { self.done = val; },
    changeTitle: (val: string) => { self.title = val; },
    changeDateTime: (val: string) => { self.dateTime = val; },
  }));

const TaskListModel = types
  .model('TaskList', {
    taskList: types.array(TaskModel),
  })
  .views(self => ({
    get unDoneTaskCount() {
      return self.taskList.filter(task => !task.done).length;
    }
  }))
  .actions(self => ({
    addTask: (title: string, dateTime: string) => {
      self.taskList.push(TaskModel.create({
        title,
        dateTime,
      }))
    }
  }));

const STORE_KEY = 'taskListStore';

let initialState = null;

if (localStorage.getItem(STORE_KEY)) {
  const json = JSON.parse(localStorage.getItem(STORE_KEY));

  if (TaskListModel.is(json)) {
    initialState = json;
  }
}

export type TaskModelStoreType = typeof TaskModel.Type;
export type TaskListModelStoreType = typeof TaskListModel.Type;
export const taskListStoreInstance = TaskListModel.create(initialState ? initialState : {
  taskList: [],
});

onSnapshot(taskListStoreInstance, snapshot => {
  localStorage.setItem(STORE_KEY,JSON.stringify(snapshot));
});
