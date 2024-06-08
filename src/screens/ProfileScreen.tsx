import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {fetchFriends} from '../services/friends.service';
import {
  friendsRequestStart,
  friendsRequestSuccess,
  friendsRequestError,
} from '../redux/reducers/friend.reducer';
import type {AppDispatch} from '../redux/store';

type RootStackParamList = {
  Profile: {name?: string};
  User: undefined;
  Friends: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  const {name} = route.params;

  const dispatch = useDispatch<AppDispatch>();

  const handleFriends = useCallback(async () => {
    try {
      dispatch(friendsRequestStart());
      const response = await fetchFriends({page: 1, results: 10});
      dispatch(friendsRequestSuccess({friends: response.results}));
    } catch (friendsError) {
      if (friendsError instanceof Error) {
        console.error(
          'Something went wrong trying to fetch the friends list.',
          friendsError,
        );
        dispatch(friendsRequestError(friendsError.message));
      }
    }
  }, [dispatch]);

  const handleUserPress = () => navigation.navigate('User');
  const handleFriendsPress = async () => {
    await handleFriends();
    navigation.navigate('Friends');
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Hello, {name}!</Text>
      <Button title="User" onPress={handleUserPress} />
      <Button title="Friends" onPress={handleFriendsPress} />
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
