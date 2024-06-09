import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import type {Friend as FriendType} from '../redux/reducers/friend.reducer';

export const Friend = (friend: FriendType) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: friend.picture.large}} style={styles.image} />
      <View style={styles.content}>
        <Text
          style={
            styles.friendName
          }>{`${friend.name.title} ${friend.name.first} ${friend.name.last}`}</Text>
        <Text style={styles.friendEmail}>{friend.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  content: {
    justifyContent: 'space-around',
  },
  friendName: {
    fontSize: 16,
  },
  friendEmail: {
    color: '#777',
  },
});
