import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }
}
export default App;
