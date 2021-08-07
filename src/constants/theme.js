import {Dimensions} from 'react-native';

const {height, width, scale} = Dimensions.get('window');

export const SIZES = {
  Height: height,
  Width: width,
  Scale: scale,
};

export const IMAGES = {
  Logo: require('../assets/logo.png'),
  DoorLock: require('../assets/door-lock-icon.png'),
};

export const COLORS = {
  Primary: '#FFC619',
  Background: '#000000',
  White: '#ffffff',
  Gray: 'gray',
  DarkGray: '#3B3B3B',
};
