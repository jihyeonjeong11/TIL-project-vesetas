import { Button } from 'React-native';
import React from 'react';
import { SharedSnackbarConsumer } from './Context';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonA = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="raised"
        color="primary"
        onClick={() => openSnackbar('You clicked Button A!')}
      >
        Button A
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonA;