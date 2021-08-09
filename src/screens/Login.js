import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  Alert,
} from 'react-native';
import {COLORS, IMAGES, SIZES} from '../constants/theme';
import {CONFIG} from '../constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const _loginHandler = async () => {
    const url = `http://${CONFIG.IP}:${CONFIG.PORT}/auth/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    }).catch(error =>
      ToastAndroid.show(
        'unable to get data. Please check your device is connected to internet.',
        ToastAndroid.LONG,
      ),
    );
    const result = await response.json();

    if (result.success === 1) {
      await AsyncStorage.setItem('userDetails', JSON.stringify(result));
      _navigationHandler('Drawer');
    } else {
      Alert.alert(
        result.message,
        'Check your email address and password again.',
      );
    }
  };
  const _navigationHandler = screen_name => {
    navigation.navigate(screen_name);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLORS.Background}}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Image source={IMAGES.Logo} style={styles.logo} />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Capstone Automation</Text>
            <Text style={styles.subHeaderText}>Login to your account</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              placeholderTextColor={COLORS.Primary}
              style={styles.inputField}
            />
            <TextInput
              keyboardType="default"
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={COLORS.Primary}
              style={styles.inputField}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => _loginHandler()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.Background,
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    margin: 10,
    alignSelf: 'center',
    marginTop: SIZES.Height * 0.2,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.Primary,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    margin: 10,
  },
  subHeaderText: {
    color: COLORS.Primary,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  formContainer: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
  },
  inputField: {
    borderColor: COLORS.Primary,
    borderWidth: 1,
    borderRadius: 5,
    width: SIZES.Width * 0.8,
    paddingLeft: 20,
    color: COLORS.Primary,
    margin: 10,
  },
  loginBtn: {
    backgroundColor: COLORS.Primary,
    padding: 10,
    width: SIZES.Width * 0.8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.Height / 15,
    borderRadius: 5,
  },
});
export default Login;
