import { ADD_ADDRESS, ADD_TO_CART, CLEAR_CART, REMOVE_ADDRESS, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../constans/CartConstans";
import { produce } from "immer";


const cartInitalState = {
    cart:[]
}

const findItemIndex = (cart, itemId)=>{
    return cart.findIndex(item => item.id ===itemId);
}

const cartReducer = (state = cartInitalState, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            const existingIndex = findItemIndex(state.cart, action.payload.id);

            if(existingIndex !== -1 )
            {
                const updatedCart = produce(state.cart, draftCart=>{
                    draftCart[existingIndex].quantity += action.payload.quantity
                });
                saveState({cart: updatedCart},'cart');
                return{
                    ...state,
                    cart:updatedCart
                }

            }
            else{
                const updatedCartAdd= [...state.cart, action.payload];
                saveState({cart:updatedCartAdd}, 'cart');
                return{
                    ...state,
                    cart:updatedCartAdd
                };

            }
        case REMOVE_FROM_CART:
            const updatedCartRemove = state.cart.filter(item =>item.id !==action.payload);
            saveState({cart:updatedCartRemove}, 'cart');
            return{
                ...state,
                cart:updatedCartRemove
            };
        case UPDATE_QUANTITY:
            const updateCartQuantity = state.cart.map(item=>
                item.id === action.payload.id
                ? {...item, quantity: action.payload.quantity}
                : item
            );
            saveState({cart:updateCartQuantity}, 'cart');
            return{
                ...state,
                cart:updateCartQuantity
            }
        case CLEAR_CART:
            saveState({cart :[]}, 'cart')
            return{
                ...state,
                cart:[],
            };

        default:
            return state;

    }

}


const addressInitalState = {
    addresses:[]
}

const addRessReducer = (state=addressInitalState, action) =>{
    switch (action.type){
        case ADD_ADDRESS:
            if(state.addresses.length ===0){
               const updatedAddressesAdd = { addresses: [...state.addresses, action.payload] };
                saveState(updatedAddressesAdd, 'addresses'); // saveState'ı gerekirse güncelleyin
                return {
                  ...state,
                  addresses: updatedAddressesAdd,
                };
            }
            else{
                return state;
            }
        case REMOVE_ADDRESS:
            const UpdatedAddressesRemove =  state.addresses.addresses.filter(address =>address.id !==action.payload);
            saveState({addresses: UpdatedAddressesRemove}, 'addresses');
            return{
                ...state,
                addresses:UpdatedAddressesRemove
            };
        
        default:
            return state;
    }
}


const loadState = (key)=>{
    try{
        const serializedState = localStorage.getItem(key);
        if(serializedState===null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined
    }
}

const saveState =(state, key)=>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    }
    catch(err){

    }
}

export {cartReducer, addRessReducer, loadState, saveState};