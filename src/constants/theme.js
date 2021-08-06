import {Dimensions} from 'react-native';

const {height, width, scale} = Dimensions.get('window');

export const SIZES = {
  Height: height,
  Width: width,
  Scale: scale,
};

export const IMAGES = {
  Logo: require('../assets/images/logo.png'),
  DoorLock: require('../assets/images/door-lock-icon.png'),
};

export const COLORS = {
  Primary: '#FFC619',
  Background: '#000000',
  White: '#ffffff',
};
