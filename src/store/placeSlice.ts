import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PlaceState {
  place: string[];
  suspicious: string[];
  innocent: string[];
}

const initialState: PlaceState = {
  place: ['침실', '욕실', '마당', '식당', '차고', '게임룸', '서재', '거실', '부엌'],
  suspicious: [],
  innocent: [],
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    exclude: (state, action: PayloadAction<string>) => {
      state.place = state.place.filter((x) => x !== action.payload);
      state.suspicious = state.suspicious.filter((x) => x !== action.payload);
      state.innocent.push(action.payload);
    },
    suspect: (state, action: PayloadAction<string>) => {
      state.place = state.place.filter((x) => x !== action.payload);
      state.suspicious.push(action.payload);
    },
  },
});

export const { exclude, suspect } = placeSlice.actions;

export const placeState = (state: RootState) => state.place;

export default placeSlice.reducer;
