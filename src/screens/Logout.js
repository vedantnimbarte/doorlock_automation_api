import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {COLORS} from '../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({navigation}) => {
  React.useEffect(() => {
    _logout();
  });

  const _logout = async () => {
    await AsyncStorage.removeItem('userDetails');
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.Background}}>
      <ActivityIndicator size="large" color={COLORS.Primary} />
      <Text style={{color: COLORS.Primary, fontSize: 16, letterSpacing: 0.5}}>
        Logging out..
      </Text>
    </View>
  );
};

export default Logout;
