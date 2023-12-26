import { 
    CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS,
    PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS,
    TOP_PRODUCT_FAIL, TOP_PRODUCT_REQUEST, TOP_PRODUCT_SUCCESS,
    BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS

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


const initiaBrandlState ={
    brands : [],
    loading:false,
    error:null,
};

export const brandReducer = (state = initiaBrandlState, action )=>{
    switch(action.type){
        case BRAND_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case BRAND_SUCCESS:
            return{
                ...state,
                loading:false,
                brands:action.payload,
            };
        case BRAND_FAIL:
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


const TopProductinitialState ={
    topproducts : [],
    loading:false,
    error:null,
};

export const TopProductReducer = (state = TopProductinitialState, action )=>{
    switch(action.type){
        case TOP_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case TOP_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                topproducts:action.payload,
            };
        case TOP_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}