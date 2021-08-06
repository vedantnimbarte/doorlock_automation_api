import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS, IMAGES, SIZES} from '../constants/theme';

const Login = () => {
  return (
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
          placeholderTextColor={COLORS.Primary}
          style={styles.inputField}
        />
        <TextInput
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={COLORS.Primary}
          style={styles.inputField}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.Background,
    height: SIZES.Height * 1,
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 150,
    width: 150,
    margin: 10,
    alignSelf: 'center',
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
