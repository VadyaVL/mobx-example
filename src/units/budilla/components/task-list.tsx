import * as React from 'react';
import { observer } from 'mobx-react';

import { TaskItem } from './task-item';
import { AddTaskDialog } from './add-task-dialog';
import { TaskListModelStoreType } from '../store';

interface Props {
  taskList: TaskListModelStoreType;
}

@observer
export class TaskList extends React.Component<Props> {

  public onAddTask = (title: string, dateTime: string) => {
    this.props.taskList.addTask(title, dateTime);
  };

  public render(): React.ReactNode {
    return (
      <div className='task-list'>
        {
          this.props.taskList &&
          this.props.taskList.taskList &&
          this.props.taskList.taskList.map(task => (
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
