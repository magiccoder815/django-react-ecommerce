import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { ProductDetailReducer, ProductReducer, SearchProductReducer, TopProductReducer, brandReducer, categoryReducer } from './hooks/reducers/ProductReducer';
import { SocialReducer, sliderReducer } from './hooks/reducers/SettingsReducer';
import { UserLoginReducer, userChangePassReducer, userReducer, userRegisterReducer } from './hooks/reducers/UserReducer';

const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo") || 'null');

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
    userRegister:userRegisterReducer,
    userLogin:UserLoginReducer,
    user: userReducer,
    Cpassword:userChangePassReducer
  },
  preloadedState:{
    userLogin:{userInfo:userInfoFromStorage}
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;