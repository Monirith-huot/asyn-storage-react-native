import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import COLOR from '../contains/pallete';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  async saveUsername(value) {
    try {
      await AsyncStorage.setItem('Username', value);
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView style={styles.default}>
          <Text style={{fontSize: 20}}>Async Storage</Text>

          <View style={styles.textInput}>
            <TextInput
              underlineColor="grey"
              activeUnderlineColor={COLOR.primary}
              selectionColor={COLOR.primary}
              activeOutlineColor={COLOR.primary}
              placeholder="username"
              onChangeText={value => this.saveUsername(value)}
              style={{flex: 1, backgroundColor: 'white'}}
              // value={this.state.userName}
            />
          </View>

          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  textInput: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 7,
  },
  loginScreenButton: {
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    width: '80%',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Login;
