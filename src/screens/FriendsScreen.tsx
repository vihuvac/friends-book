import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {Friend} from '../components/Friend';
import type {RootState} from '../redux/store';
import type {Friend as FriendType} from '../redux/reducers/friend.reducer';

// type RootStackParamList = {
//   Home: undefined;
//   Profile: {name?: string};
//   User: undefined;
//   Friends: undefined;
// };

// type FriendsScreenProps = NativeStackScreenProps<RootStackParamList, 'Friends'>;

export const FriendsScreen = () => {
  const friends = useSelector<RootState, FriendType[]>(
    state => state.friend.friends,
  );

  const renderItem: ListRenderItem<FriendType> = ({item}) => (
    <Friend {...item} />
  );

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
    />
  );
};
