import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hero } from "../../types/Hero" 

export interface HeroesState {
    heroes: Hero[];
}

const initialState: HeroesState = {
    heroes: [],
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        setHeroes(state, action: PayloadAction<Hero[]>) {
            // state.heroes.push(action.payload)
            // state.heroes = [...state.heroes, ...action.payload];
            // state.heroes = {...state.heroes, action.payload}
            state.heroes = action.payload;
        }
    }
})

export const { setHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;