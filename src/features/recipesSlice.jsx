import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APP_ID = 'ff65de39'
const APP_KEY = 'b9955d8ec9ba6028fe4272c003d58c95'

const initialState = {
    recipesList: [],
    status: "idle",
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = "loaded";
                state.recipesList = action.payload;
            });
    },
})

export const { fetchRecipesList } = recipesSlice.actions;
export default recipesSlice.reducer;

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async (searchTerm) => {
    const data = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`)
    return data.json()
})