import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {CoolWebView} from '../components/CoolWebView';

type RootStackParamList = {
  Home: undefined;
  Profile: {name?: string};
  Stuff: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const htmlString = `
<html>
  <body>
    <h1>Hi, there!</h1>
    <p>How is it going?</p>
  </body>
</html>
`;

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  // It is possible to pass props to the other component through an object as a second parameter, e.g:
  // navigation.navigate('Profile', {name: 'Jane'});
  // In the ProfileScreen component, the name prop can be accessed as follows:
  // const {name} = route.params;
  const handleProfilePress = () =>
    navigation.navigate('Profile', {name: 'Jane'});
  const handleStuffPress = () => navigation.navigate('Stuff');

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Native Stack Navigator</Text>
      <Text style={styles.textStyle}>This is the Home Screen</Text>
      <CoolWebView
        htmlString={htmlString}
        onComment={() => console.log('comment clicked!')}
        onHighlight={() => console.log('highlight clicked!')}
      />
      <Button title="Profile" onPress={handleProfilePress} />
      <Button title="Stuff" onPress={handleStuffPress} />
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
