import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './characterSlice';
import playerSlice from './playerSlice';
import placeSlice from './placeSlice';
import weaponSlice from './weaponSlice';
import cardSlice from './cardSlice';

export const store = configureStore({
  reducer: {
    character: characterSlice,
    player: playerSlice,
    place: placeSlice,
    weapon: weaponSlice,
    card: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
