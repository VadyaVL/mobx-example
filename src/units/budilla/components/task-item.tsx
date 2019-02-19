import * as React from 'react';
import { TaskModelStoreType } from '../store';

interface Props {
  task: TaskModelStoreType;
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
