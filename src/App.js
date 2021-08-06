import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>App.js</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
});

export default App;
