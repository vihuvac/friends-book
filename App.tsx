import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {UserScreen} from './screens/UserScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: {name?: string};
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = (): React.JSX.Element => {
  // The back button can be customized by setting the headerLeft property.
  //   - screenOptions prop of the Stack.Navigator component for all the screens.
  //   - options prop of the Stack.Screen component for a specific screen.
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarColor: 'orange',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
