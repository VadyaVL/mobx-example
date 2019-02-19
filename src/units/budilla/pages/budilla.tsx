import * as React from 'react';

import { MainLayout } from '../../../components';
import { TaskList } from '../components';
import { taskListStoreInstance } from '../store';
import { commonModelStoreInstance } from '../../../common/store';

export class BudillaPage extends React.Component {
  public render(): React.ReactNode {
    return (
      <MainLayout
        menuContent={<TaskList taskList={taskListStoreInstance} />}
        commonState={commonModelStoreInstance}
      >
        <div className='budilla-page'>
          Content
        </div>
      </MainLayout>
    );
  }
}
