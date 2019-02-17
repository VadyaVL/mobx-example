import * as React from 'react';

import { TaskListModel, TaskModel } from '../store';
import { TaskItem } from './task-item';
import { AddTaskDialog } from './add-task-dialog';
import { observer } from 'mobx-react';

interface Props {
  taskList: TaskListModel;
}

@observer
export class TaskList extends React.Component<Props> {

  public onAddTask = (title: string, dateTime: string) => {
    console.log('Add task', title, dateTime);
    this.props.taskList.addTask(new TaskModel(title, dateTime));
  };

  public render(): React.ReactNode {
    return (
      <div className='task-list'>
        {
          this.props.taskList &&
          this.props.taskList.tasks &&
          this.props.taskList.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))
        }
        <AddTaskDialog onSubmit={this.onAddTask} />
      </div>
    );
  }
}
