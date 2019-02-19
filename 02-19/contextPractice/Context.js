import React, { Component } from 'react';
import SharedSnackbar from './Context';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: '',
    };
  }

  openSnackbar = message => {
    this.setState({
      message,
      isOpen: true,
    });
  };

  closeSnackbar = () => {
    this.setState({
      message: '',
      isOpen: false,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
        }}
      >
        <SharedSnackbar />// TODO:  Render Snackbar presentation component here
      
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;