import * as React from 'react';
import { TodoModel } from '../mobx/state';

interface Props {
  onAdd: (item: TodoModel) => void;
}

interface State {
  text: string;
}

export class CreateTodoForm extends React.Component<Props, State> {
  public readonly state: State = {
    text: '',
  };


  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value,
    });
  };

  private onAdd = () => {
    if (this.props.onAdd) {
      const newTodo = new TodoModel();
      newTodo.title = this.state.text;
      this.props.onAdd(newTodo);
    }

    this.setState({ text: '' });
  };

  public render(): React.ReactNode {
    return (
      <div>
        <input value={this.state.text} onChange={this.onChange} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}
