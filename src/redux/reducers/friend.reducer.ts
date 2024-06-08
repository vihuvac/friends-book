import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type FriendName = {
  title: string;
  first: string;
  last: string;
};

type FriendLocation = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

type FriendLogin = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type FriendPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};

type FriendId = {
  name: string;
  value: string;
};

export type Friend = {
  id: FriendId;
  name: FriendName;
  email: string;
  gender: string;
  phone: string;
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  location: FriendLocation;
  login: FriendLogin;
  picture: FriendPicture;
};

type FriendState = {
  friends: Friend[];
  error: string | null;
  loading: boolean;
};

const initialState: FriendState = {
  friends: [],
  error: null,
  loading: false,
};

// Define the slice to automatically generate action creators, types and reducers.
const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    friendsRequestStart: state => ({
      ...state,
      loading: true,
    }),
    friendsRequestSuccess: (
      state,
      action: PayloadAction<{friends: Friend[]}>,
    ) => ({
      ...state,
      loading: false,
      friends: action.payload.friends,
    }),
    friendsRequestError: (state, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

// Export the actions.
export const {friendsRequestStart, friendsRequestSuccess, friendsRequestError} =
  friendSlice.actions;

// Export the reducer.
export default friendSlice.reducer;
