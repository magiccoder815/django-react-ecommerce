import { ADD_ADDRESS, ADD_TO_CART, CLEAR_CART, REMOVE_ADDRESS, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../constans/CartConstans";

export const AddToCart = (item) =>({
    type:ADD_TO_CART,
    payload:item,
});

export const removeFromCart = (itemId) =>({
    type:REMOVE_FROM_CART,
    payload:itemId,
});

export const updateQuantity = (itemId, newQuantity) =>({
    type:UPDATE_QUANTITY,
    payload:{id:itemId, quantity : newQuantity},
});

export const clearCart = () =>({
    type:CLEAR_CART,
});

export const addAddress = (address) =>({
    type:ADD_ADDRESS,
    payload: address,

});

export const removeAddress = (addressId) =>({
    type:REMOVE_ADDRESS,
    payload: addressId,

});

