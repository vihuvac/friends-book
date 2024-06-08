import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {rootReducer} from './combineReducers';
import {appInfo as rawAppInfo} from '../helpers/platform.helper';

// Add an index signature to appInfo.
const appInfo: typeof rawAppInfo & Record<string, unknown> = rawAppInfo;

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        '%c' +
          Object.keys(appInfo).reduce((s, key) => {
            s += `${key}: ${appInfo[key]}\n`;
            return s;
          }, ''),
        'color: #4478B6; font-weight: bold',
      );
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
