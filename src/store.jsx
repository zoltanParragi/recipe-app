import { configureStore } from '@reduxjs/toolkit';
import recipesSlice from './features/recipesSlice';
import favouritesSlice from './features/favouritesSlice';

const store = configureStore({
    reducer: {
        recipes: recipesSlice,
        favourites: favouritesSlice
    }
});

export default store;
