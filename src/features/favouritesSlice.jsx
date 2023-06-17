import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        pushToFavourites: (state, action) => {
            const found = state.some(el => el.recipe.shareAs === action.payload.recipe.shareAs)
            if (!found) state.push(action.payload)
        },
        removeFromFavourites: (state, action) => {
            return state.filter(item => item.recipe.shareAs !== action.payload)
        }
    }
})

export const { pushToFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;