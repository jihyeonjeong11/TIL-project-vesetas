import { Button } from 'React-Native';
import React from 'react';
import { SharedSnackbarConsumer } from './Context';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonB = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="raised"
        color="secondary"
        onClick={() => openSnackbar('You clicked Button B!')}
      >
        Button B
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonB;