import * as React from 'react';
import { TaskModel } from '../store';

interface Props {
  task: TaskModel;
}

export const TaskItem: React.StatelessComponent<Props> = ({
  task,
}) => {
  return (
    <div className='task-list'>
      <span>{task.title}</span>
      <span>{task.dateTime}</span>
    </div>
  );
}
