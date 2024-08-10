import { createSlice } from "@reduxjs/toolkit";

// const setError = (state, action) => {
//     state.status = "rejected";
//     state.error = action.payload;
// };

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: {
        heroes: [],
    },
    reducers: {
        setHeroes(state, action) {
            state.heroes.push(action.payload)
        }
    }
})

export const { setHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;