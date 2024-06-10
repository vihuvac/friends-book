import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {name?: string};
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  // It is possible to pass props to the other component through an object as a second parameter, e.g:
  // navigation.navigate('Profile', {name: 'Jane'});
  // In the ProfileScreen component, the name prop can be accessed as follows:
  // const {name} = route.params;
  const handlePress = () => navigation.navigate('Profile', {name: 'Jane'});

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Native Stack Navigator</Text>
      <Text style={styles.textStyle}>This is the Home Screen</Text>
      <Button title="Profile" onPress={handlePress} />
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
