import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type Store = ReturnType<typeof rootReducer>;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<Store> = useSelector;

export default store;
