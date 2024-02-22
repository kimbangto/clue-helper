import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: string[] = [];

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<string>) => {
      if (state.length === 6) {
        alert('최대 6인까지 가능한 게임입니다.');
        return;
      }
      state.push(action.payload);
    },
    deletePlayer: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    reversePlayer: (state) => {
      state.reverse();
    },
  },
});

export const { addPlayer, deletePlayer, reversePlayer } = playerSlice.actions;

export const playerState = (state: RootState) => state.player;

export default playerSlice.reducer;
