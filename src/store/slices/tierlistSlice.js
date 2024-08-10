import { createSlice } from "@reduxjs/toolkit";

const tierlistSlice = createSlice({
  name: "tierlist",
  initialState: {
    sTier: [],
    aTier: [],
    bTier: [],
    cTier: [],
    dTier: [],
  },
  reducers: {
    setSTierHeroes(state, action) {
        // Удаляем героя из всех тиров перед добавлением
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.sTier.push(action.payload);
      },
      setATierHeroes(state, action) {
        // Удаляем героя из всех тиров перед добавлением
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier.push(action.payload);
      },
      setBTierHeroes(state, action) {
        // Удаляем героя из всех тиров перед добавлением
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier.push(action.payload);
      },
      setCTierHeroes(state, action) {
        // Удаляем героя из всех тиров перед добавлением
        state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
        state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
        state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
        state.dTier = state.dTier.filter((hero) => hero.id !== action.payload.id);
        state.cTier.push(action.payload);
      },
      setDTierHeroes(state, action) {
        // Удаляем героя из всех тиров перед добавлением
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
    removeTierSHero(state, action) {
      state.sTier = state.sTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierAHero(state, action) {
      state.aTier = state.aTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierBHero(state, action) {
      state.bTier = state.bTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierCHero(state, action) {
      state.cTier = state.cTier.filter((hero) => hero.id !== action.payload.id);
    },
    removeTierDHero(state, action) {
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
