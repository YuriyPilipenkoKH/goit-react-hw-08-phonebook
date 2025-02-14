import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { langReducer } from './langSlice';
import { sortReducer } from './sortSlice';
import { authReducer, AuthState } from './auth/authSlice';
import { themeReducer } from './themeSlice';
import { filterReducer } from './filterSlice';
import { formReducer } from './formSlice';
import { contactsReducer } from './contactsSlice';
import { PersistPartial } from 'redux-persist/es/persistReducer';



const authPersistConfig: PersistConfig<AuthState & PersistPartial> = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  
export const store = configureStore({

    reducer: {    
        contacts: contactsReducer,
        form: formReducer ,    
        filter: filterReducer,
        theme:themeReducer,
        lang:langReducer,
        sort:sortReducer,
        auth: persistedAuthReducer ,// ✅ Correctly typed
    },

    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        })},
})   

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);