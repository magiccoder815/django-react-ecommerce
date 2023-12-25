import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../constans/Productconstans"


const initialState ={
    categories : [],
    loading:false,
    error:null,
};

export const categoryReducer = (state = initialState, action )=>{
    switch(action.type){
        case CATEGORIES_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case CATEGORIES_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:action.payload,
            };
        case CATEGORIES_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}