import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
