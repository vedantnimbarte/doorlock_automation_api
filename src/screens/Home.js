import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, IMAGES, SIZES} from '../constants/theme';
import {CONFIG} from '../constants/config';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [user, setUser] = React.useState();
  const [lockStatus, setLockStatus] = React.useState(true);

  React.useEffect(() => {
    _getUserDetails();
  }, []);

  const _getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('userDetails');
    setUser(JSON.parse(userData));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Entypo name="menu" size={35} color={COLORS.Primary} />
        <Ionicons name="notifications" size={35} color={COLORS.Primary} />
      </View>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.greetingText}>Welcome</Text>
          <Text style={styles.userName}>
            {user ? user.results[0].name : 'Name not available'}
          </Text>
        </View>
        <EvilIcons name="user" size={70} color={COLORS.Primary} />
      </View>
      <View style={styles.doorLockIconContainer}>
        <Image source={IMAGES.DoorLock} style={styles.DoorLockIcon} />
      </View>
      <View style={styles.doorLockContainer}>
        <View>
          <Text style={styles.lockName}>Door</Text>
          <Text style={styles.lockStatus}>
            {lockStatus ? 'Locked' : 'Unlocked'}
          </Text>
        </View>
        <AntDesign
          name="poweroff"
          size={35}
          color={lockStatus ? COLORS.Primary : COLORS.White}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.Background,
    flex: 1,
  },
  topContainer: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 50,
  },
  userInfoContainer: {
    backgroundColor: COLORS.DarkGray,
    borderRadius: 20,
    margin: 20,
    height: SIZES.Height * 0.15,
    justifyContent: 'space-between',
    padding: 30,
    flexDirection: 'row',
  },
  greetingText: {
    color: COLORS.White,
    letterSpacing: 0.5,
    fontSize: 16,
    lineHeight: 30,
  },
  userName: {
    color: COLORS.Primary,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  doorLockIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DarkGray,
    padding: 10,
    borderRadius: SIZES.Height * 1,
    marginBottom: SIZES.Height * 0.1,
    height: SIZES.Height * 0.2,
    width: SIZES.Height * 0.2,
    alignSelf: 'center',
    marginTop: SIZES.Height * 0.1,
    borderWidth: 5,
    borderColor: COLORS.Primary,
  },
  DoorLockIcon: {
    height: SIZES.Height / 9,
    width: SIZES.Height / 15,
  },
  doorLockContainer: {
    backgroundColor: COLORS.DarkGray,
    borderRadius: 20,
    margin: 20,
    height: SIZES.Height * 0.13,
    justifyContent: 'space-between',
    padding: 30,
    flexDirection: 'row',
  },
  lockStatus: {
    color: COLORS.Primary,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  lockName: {
    color: COLORS.White,
    letterSpacing: 0.5,
    fontSize: 16,
  },
});

export default Home;
