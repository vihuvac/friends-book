import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const UserScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is the User Screen</Text>
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
});
