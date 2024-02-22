import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CharacterState {
  character: string[];
  suspicious: string[];
  innocent: string[];
}

const initialState: CharacterState = {
  character: ['스칼렛', '화이트', '피콕', '머스터드', '그린', '플럼'],
  suspicious: [], // 의심스러운
  innocent: [], // 결백한
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    exclude: (state, action: PayloadAction<string>) => {
      state.character = state.character.filter((x) => x !== action.payload);
      state.suspicious = state.suspicious.filter((x) => x !== action.payload);
      state.innocent.push(action.payload);
    },
    suspect: (state, action: PayloadAction<string>) => {
      state.character = state.character.filter((x) => x !== action.payload);
      state.suspicious.push(action.payload);
    },
  },
});

export const { exclude, suspect } = characterSlice.actions;

export const characterState = (state: RootState) => state.character;

export default characterSlice.reducer;
