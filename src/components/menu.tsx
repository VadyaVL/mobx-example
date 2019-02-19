import * as React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

import './menu.scss';

interface Props {
  isOpen?: boolean;
}

@observer
export class Menu extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <div className={classNames('menu', { open: this.props.isOpen })}>
        {this.props.children}
      </div>
    );
  }
}
