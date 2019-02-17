import * as React from 'react';

export class MainLayout extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className='main-layout'>
        {this.props.children}
      </div>
    );
  }
}
