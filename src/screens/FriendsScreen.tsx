import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {fetchFriends} from '../services/friends.service';
import {
  friendsRequestStart,
  friendsRequestSuccess,
  friendsRequestError,
} from '../redux/reducers/friend.reducer';

import {Friend} from '../components/Friend';
import {Loader} from '../components/Loader';

import type {RootState} from '../redux/store';
import type {Friend as FriendType} from '../redux/reducers/friend.reducer';
import type {AppDispatch} from '../redux/store';

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
    shallowEqual,
  );

  // TODO: Read the error message from the store and display it in the UI.

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleFriends = useCallback(async () => {
    try {
      setIsLoading(true);
      dispatch(friendsRequestStart());

      const response = await fetchFriends({page: currentPage, results: 10});

      setIsLoading(false);
      dispatch(friendsRequestSuccess({friends: response.results}));
    } catch (friendsError) {
      if (friendsError instanceof Error) {
        dispatch(friendsRequestError(friendsError.message));
      }
    }
  }, [currentPage, dispatch]);

  useEffect(() => {
    handleFriends();
  }, [handleFriends]);

  const renderItem = useCallback<ListRenderItem<FriendType>>(
    ({item}) => <Friend {...item} />,
    [],
  );

  const renderLoader = () => (isLoading ? <Loader /> : null);

  const handleLoadMore = () => !isLoading && setCurrentPage(currentPage + 1);

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
      ListFooterComponent={renderLoader}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0}
    />
  );
};
