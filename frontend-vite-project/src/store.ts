import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { ProductDetailReducer, ProductIdReducer, ProductReducer, SearchProductReducer, TopProductReducer, brandReducer, categoryReducer } from './hooks/reducers/ProductReducer';
import { SocialReducer, sliderReducer } from './hooks/reducers/SettingsReducer';
import { UserLoginReducer, deleteWishlistReducer, getWishlistReducer, postWishlistReducer, userChangePassReducer, userReducer, userRegisterReducer } from './hooks/reducers/UserReducer';
import { addRessReducer, cartReducer, loadState, saveState } from './hooks/reducers/CartReducer';

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
    Cpassword:userChangePassReducer,
    getWish:getWishlistReducer,
    postWish:postWishlistReducer,
    deleteWish:deleteWishlistReducer,
    idProduct: ProductIdReducer,
    cart:cartReducer,
    addresses:addRessReducer,
  },
  preloadedState:{
    userLogin:{userInfo:userInfoFromStorage},
    cart:loadState('cart'),
    addresses: loadState('addresses'),

  }
});

store.subscribe(()=>{
  saveState(store.getState().cart, 'cart');
  saveState(store.getState().addresses, 'addresses');
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;