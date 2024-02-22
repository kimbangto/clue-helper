import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface WeaponState {
  weapon: string[];
  suspicious: string[];
  innocent: string[];
}

const initialState: WeaponState = {
  weapon: ['침실', '욕실', '마당', '식당', '차고', '게임룸', '서재', '거실', '부엌'],
  suspicious: [],
  innocent: [],
};

export const weaponSlice = createSlice({
  name: 'weapon',
  initialState,
  reducers: {
    exclude: (state, action: PayloadAction<string>) => {
      state.weapon = state.weapon.filter((x) => x !== action.payload);
      state.suspicious = state.suspicious.filter((x) => x !== action.payload);
      state.innocent.push(action.payload);
    },
    suspect: (state, action: PayloadAction<string>) => {
      state.weapon = state.weapon.filter((x) => x !== action.payload);
      state.suspicious.push(action.payload);
    },
  },
});

export const { exclude, suspect } = weaponSlice.actions;

export const weaponState = (state: RootState) => state.weapon;

export default weaponSlice.reducer;
