import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hero } from '../../types/Hero'

interface TierlistState {
  sTier: Hero[];
  aTier: Hero[];
  bTier: Hero[];
  cTier: Hero[];
  dTier: Hero[];
}

const initialState: TierlistState = {
  sTier: [],
  aTier: [],
  bTier: [],
  cTier: [],
  dTier: [],
};

const tierlistSlice = createSlice({
  name: "tierlist",
  initialState,
  reducers: {
    setSTierHeroes(state, action: PayloadAction<Hero>) {
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.sTier.push(action.payload);
      },
      setATierHeroes(state, action: PayloadAction<Hero>) {
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier.push(action.payload);
      },
      setBTierHeroes(state, action: PayloadAction<Hero>) {
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier.push(action.payload);
      },
      setCTierHeroes(state, action: PayloadAction<Hero>) {
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier.push(action.payload);
      },
      setDTierHeroes(state, action: PayloadAction<Hero>) {
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier.push(action.payload);
      },
    clearAllTierHeroes(state) {
        state.sTier = []
        state.aTier = []
        state.bTier = []
        state.cTier = []
        state.dTier = []
    },
    removeTierSHero(state, action: PayloadAction<Hero>) {
      state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierAHero(state, action: PayloadAction<Hero>) {
      state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierBHero(state, action: PayloadAction<Hero>) {
      state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierCHero(state, action: PayloadAction<Hero>) {
      state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierDHero(state, action: PayloadAction<Hero>) {
      state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
    },
  },
});

export const {
  setSTierHeroes,
  setATierHeroes,
  setBTierHeroes,
  setCTierHeroes,
  setDTierHeroes,
  clearAllTierHeroes,
  removeTierSHero,
  removeTierAHero,
  removeTierBHero,
  removeTierCHero,
  removeTierDHero,
} = tierlistSlice.actions;
export default tierlistSlice.reducer;
