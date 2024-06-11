import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TabButtons} from '../components/TabButtons';
import type {TabButton} from '../components/TabButtons';

export enum StuffTab {
  Open,
  Archive,
}

export const StuffScreen = () => {
  const [selectedTab, setSelectedTab] = useState<StuffTab>(StuffTab.Open);

  const buttons: TabButton[] = [
    {
      title: 'Open',
    },
    {
      title: 'Archive',
    },
  ];

  return (
    <>
      <TabButtons
        buttons={buttons}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <View style={styles.content}>
        {selectedTab === StuffTab.Open ? (
          <>
            <Text style={styles.description}>Content 1</Text>
            <Text style={styles.description}>Content 2</Text>
            <Text style={styles.description}>Content 3</Text>
          </>
        ) : (
          <Text style={styles.description}>Archived Content 1</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
  },
});
