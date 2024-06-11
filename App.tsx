import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/redux/store';
import {HomeScreen} from './src/screens/HomeScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {UserScreen} from './src/screens/UserScreen';
import {FriendsScreen} from './src/screens/FriendsScreen';
import {StuffScreen} from './src/screens/StuffScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: {name?: string};
  User: undefined;
  Friends: undefined;
  Stuff: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = (): React.JSX.Element => {
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
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Stuff" component={StuffScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const App = (): React.JSX.Element => {
  useEffect(() => {
    // Enable Reactotron in development mode.
    if (__DEV__) {
      require('./ReactotronConfig');
    }
  });

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
