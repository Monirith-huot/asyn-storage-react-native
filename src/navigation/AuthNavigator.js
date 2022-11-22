import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default MyStack;
