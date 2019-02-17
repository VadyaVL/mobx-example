import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Button, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

interface Props {
  onSubmit: (title: string, dateTime: string) => void;
}

interface State {
  open: boolean;
  title: string;
  dateTime: string;
}

export class AddTaskDialog extends React.Component<Props, State> {
  public readonly state: State = {
    open: false,
    title: '',
    dateTime: '',
  };

  private handleClickOpen = () => {
    this.setState({ open: true });
  };

  private handleClose = () => {
    
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.title, this.state.dateTime);
    }

    this.setState({ open: false });
  };

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              label="Title"
              value={this.state.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                this.setState({
                  title: e.target.value,
                });
              }}
              fullWidth
            />
            <TextField
              label="Alarm clock"
              type="time"
              value={this.state.dateTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                this.setState({
                  dateTime: e.target.value,
                });
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
