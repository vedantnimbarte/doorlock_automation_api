import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, IMAGES, SIZES} from '../constants/theme';
import {CONFIG} from '../constants/config';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [user, setUser] = React.useState();
  const [lockStatus, setLockStatus] = React.useState();
  const [device, setDevice] = React.useState();

  React.useEffect(() => {
    _getUserDetails();
    _getLock();
    setInterval(() => {
      _getLock();
    }, 3000);
  }, []);

  const _getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('userDetails');
    setUser(JSON.parse(userData));
  };

  const _getLock = async () => {
    const userData = await AsyncStorage.getItem('userDetails');
    const user_data = JSON.parse(userData);
    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/config/getLockAssignedToUser?user_id=${user_data.results[0].user_id}`,
    );
    const result = await response.json();
    setDevice(result.results[0]);
    setLockStatus(result.results[0].relay_status ? true : false);
  };

  const updateLockStatus = async () => {
    let message = '0';
    if (device.relay_status === 0) {
      message = '1';
    }
    const response = await fetch(
      `http://${CONFIG.IP}:${CONFIG.PORT}/device/${device.serial_no}/${device.relay}/${message}/${device.id}`,
    );
    const result = await response.json();
    if (result.success > 0) {
      _getLock();
      // setTimeout(() => {
      //   _getLock();
      // }, 1000);
    }
    if (device.relay_status === 1) {
      setLockStatus(true);
    } else {
      setLockStatus(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={35} color={COLORS.Primary} />
        </TouchableOpacity>
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
      <TouchableOpacity
        style={styles.doorLockContainer}
        onPress={() => updateLockStatus()}>
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
      </TouchableOpacity>
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
