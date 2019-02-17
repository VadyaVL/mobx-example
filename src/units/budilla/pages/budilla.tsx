import * as React from 'react';

import { MainLayout } from '../../../components';
import { taskListStore } from '../store';
import { TaskList } from '../components';

export class BudillaPage extends React.Component {
  public render(): React.ReactNode {
    return (
      <MainLayout>
        <div className='budilla-page'>
          <TaskList
            taskList={taskListStore}
          />
        </div>
      </MainLayout>
    );
  }
}
