import { 
    CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS,
    PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS

} from "../constans/Productconstans"


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


const ProductinitialState ={
    products : [],
    loading:false,
    error:null,
};

export const ProductReducer = (state = ProductinitialState, action )=>{
    switch(action.type){
        case PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload,
            };
        case PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}