import {combineReducers} from '@reduxjs/toolkit';

import friend from './reducers/friend.reducer';

export const rootReducer = combineReducers({
  friend,
});
