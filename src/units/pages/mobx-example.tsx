import * as React from 'react';

import './mobx-example.scss'

export class MobXExamplePage extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="mobx-example">
        <header className="mobx-example__header">
          <span className="mobx-example__logo">logo</span>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="mobx-example__link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
