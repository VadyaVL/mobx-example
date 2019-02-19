import * as React from 'react';

import { MainLayout } from '../../../components';
import { TaskList } from '../components';
import { taskListStoreInstance } from '../store';

export class BudillaPage extends React.Component {
  public render(): React.ReactNode {
    return (
      <MainLayout>
        <div className='budilla-page'>
          <TaskList
            taskList={taskListStoreInstance}
          />
        </div>
      </MainLayout>
    );
  }
}
