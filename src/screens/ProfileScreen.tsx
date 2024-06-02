import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: {name?: string};
  User: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  const {name} = route.params;

  const handlePress = () => navigation.navigate('User');

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Hello, {name}!</Text>
      <Button title="User" onPress={handlePress} />
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
