import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CardState {
  character: string[];
  place: string[];
  weapon: string[];
  suspicious: string[];
  innocent: string[];
}

const initialState: CardState = {
  character: ['스칼렛', '화이트', '피콕', '머스터드', '그린', '플럼'],
  place: ['침실', '욕실', '마당', '식당', '차고', '게임룸', '서재', '거실', '부엌'],
  weapon: ['랜치', '촛대', '단검', '권총', '파이프', '밧줄'],
  suspicious: [], // 의심스러운
  innocent: [], // 결백한
};

export const characterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    exclude: (state, action: PayloadAction<string>) => {
      state.character = state.character.filter((x) => x !== action.payload);
      state.place = state.character.filter((x) => x !== action.payload);
      state.weapon = state.character.filter((x) => x !== action.payload);
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
