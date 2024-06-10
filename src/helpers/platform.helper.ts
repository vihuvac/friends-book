import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {getCountry, getTimeZone} from 'react-native-localize';

export type AppInfo = {
  source: string;
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'web';
  appVersion: string;
  buildNumber: string;
  osVersion: string;
  brand: string;
  deviceName: string;
  deviceCode: string;
  locale: string;
  timezone: string;
  isEmulator: boolean;
  isTablet: boolean;
  apiLevel: number;
  [key: string]: string | unknown;
};

/**
 * @constant appInfo
 * @description Creates an object with useful information about the device, it can be used to log errors and send info to the server for possible diagnostics.
 */
export const appInfo: AppInfo = {
  source: 'FriendsBook',
  platform: Platform.OS, // 'ios' or 'android'
  appVersion: `${DeviceInfo.getVersion()}`,
  buildNumber: `${DeviceInfo.getBuildNumber()}`,
  osVersion: `${DeviceInfo.getSystemVersion()}`,
  brand: DeviceInfo.getBrand(),
  deviceName: DeviceInfo.getModel(),
  deviceCode: DeviceInfo.getDeviceId(),
  locale: getCountry(),
  timezone: getTimeZone(),
  isEmulator: DeviceInfo.isEmulatorSync(),
  isTablet: DeviceInfo.isTablet(),
  apiLevel: Platform.OS === 'android' ? DeviceInfo.getApiLevelSync() : 0,
};
