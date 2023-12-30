import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { ProductDetailReducer, ProductReducer, SearchProductReducer, TopProductReducer, brandReducer, categoryReducer } from './hooks/reducers/ProductReducer';
import { SocialReducer, sliderReducer } from './hooks/reducers/SettingsReducer';
import { userRegisterReducer } from './hooks/reducers/UserReducer';

const store = configureStore({
  reducer: {
    categories:categoryReducer,
    products:ProductReducer,
    productDetail:ProductDetailReducer,
    topproducts:TopProductReducer,
    brands:brandReducer,
    searchproducts:SearchProductReducer,
    sliders:sliderReducer,
    socials:SocialReducer,
    userRegister:userRegisterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;