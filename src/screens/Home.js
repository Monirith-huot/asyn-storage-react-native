import {Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  componentDidMount() {
    this.getUserName();
  }

  async getUserName() {
    try {
      AsyncStorage.getItem('Username').then(value => {
        if (value != null) {
          this.setState({userName: value});
        }
      });
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home {this.state.userName}</Text>
      </View>
    );
  }
}

export default Home;
