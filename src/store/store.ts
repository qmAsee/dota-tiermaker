import {configureStore, combineReducers, Store} from '@reduxjs/toolkit';
import heroesReducer from './slices/heroesSlice.ts';
import tierlistReducer from './slices/tierlistSlice.ts';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
    heroes: heroesReducer,
    tierlist: tierlistReducer
})
 
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['heroes']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store:Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store)
export default store