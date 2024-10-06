import { configureStore } from '@reduxjs/toolkit'
import {
     FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
  
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { baseApi } from './baseApi/baseApi';
import authSlice from './feature/auth/authslice';

const configPersistor = {
    key: 'auth',
    storage
}
const persistedUser = persistReducer(configPersistor, authSlice)

export const makeStore = () => {
    return configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            auth: persistedUser
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



