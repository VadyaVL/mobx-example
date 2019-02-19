import * as React from 'react';
import { observer } from 'mobx-react';
import { CommonModelStoreType } from 'src/common/store';

import './main-layout.scss';

import { Menu } from './menu';
import { Header } from './header';

interface Props {
  menuContent?: React.ReactNode;
  commonState: CommonModelStoreType;
}

@observer
export class MainLayout extends React.Component<Props> {
  public render(): React.ReactNode {
    const { menuContent, commonState: { isMenuOpen } } = this.props;

    return (
      <div className='main-layout'>
        <Header onMenuToggle={this.toggleMenu} />
        <Menu isOpen={isMenuOpen}>
          {menuContent}
        </Menu>
        <div className='main-layout__content'>
          {this.props.children}
        </div>
      </div>
    );
  }

  private toggleMenu = () => {
    this.props.commonState.toggleMenu();
  }
}
