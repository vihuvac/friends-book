import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>React Navigation</Text>
      <Text style={styles.textStyle}>This is the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
