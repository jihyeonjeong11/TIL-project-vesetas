import React from 'react';
import { View, Text } from 'react-native';
import { withGlobalContext } from './GlobalContext';

class HomeScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Is online: {this.props.global.isOnline}</Text>
      </View>
    )
  }
}

export default withGlobalContext(HomeScreen);