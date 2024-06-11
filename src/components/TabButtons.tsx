import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type {LayoutChangeEvent} from 'react-native';

export type TabButton = {
  title: string;
};

type TabButtonsProps = {
  buttons: TabButton[];
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
};

export const TabButtons = ({
  buttons,
  selectedTab,
  setSelectedTab,
}: TabButtonsProps) => {
  const [dimensions, setDimensions] = useState({width: 20, height: 100});

  const buttonWidth = dimensions.width / buttons.length;

  const viewAnimatedSize = {
    width: buttonWidth - 10,
    height: dimensions.height - 10,
  };

  const tabPositionX = useSharedValue(0);

  const onTabBarLayout = (event: LayoutChangeEvent) =>
    setDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height,
    });

  const handleTabPress = (index: number) => setSelectedTab(index);

  const handleOnTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handleTabPress)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: tabPositionX.value}],
  }));

  return (
    <View accessibilityRole="tabbar" style={styles.container}>
      <Animated.View
        style={[styles.viewAnimated, viewAnimatedSize, animatedStyle]}
      />

      <View onLayout={onTabBarLayout} style={styles.buttonsWrapper}>
        {buttons.map((button, index) => {
          const selectedTabColor =
            selectedTab === index ? {color: 'orange'} : {color: '#fff'};

          return (
            <Pressable
              key={index}
              style={styles.pressable}
              onPress={() => handleOnTabPress(index)}>
              <Text style={[selectedTabColor, styles.selectedTab]}>
                {button.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    justifyContent: 'center',
  },
  viewAnimated: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  pressable: {
    flex: 1,
    paddingVertical: 20,
  },
  selectedTab: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
});
