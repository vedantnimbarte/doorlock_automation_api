import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';

const stack = createStackNavigator();

const StackNavigator = () => {
  return <Stack.Screen name="Login" component={Login} />;
};

export default StackNavigator;
