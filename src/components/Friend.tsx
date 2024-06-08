import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import type {Friend as FriendType} from '../redux/reducers/friend.reducer';

export const Friend = (friend: FriendType) => {
  return (
    <View>
      <Image source={{uri: friend.picture.large}} style={styles.image} />
      <View>
        <Text>{`${friend.name.title} ${friend.name.first} ${friend.name.last}`}</Text>
        <Text>{friend.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
