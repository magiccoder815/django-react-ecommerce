import { 
    CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS,
    PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS,
    TOP_PRODUCT_FAIL, TOP_PRODUCT_REQUEST, TOP_PRODUCT_SUCCESS,
    BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS, 
    SEARCH_PRODUCT_FAIL, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS,
    PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_RESET, PRODUCT_ID_REQUEST, PRODUCT_ID_SUCCESS, PRODUCT_ID_FAIL

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


const ProductDetail ={
    productDetail : {},
    loading:false,
    error:null,
};

export const ProductDetailReducer = (state = ProductDetail, action )=>{
    switch(action.type){
        case PRODUCT_DETAIL_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case PRODUCT_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                productDetail:action.payload,
                error:null
            };
        case PRODUCT_DETAIL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        case PRODUCT_DETAIL_RESET:
            return ProductDetail;
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


const SearchroductinitialState ={
    searchproducts : [],
    loading:false,
    error:null,
};

export const SearchProductReducer = (state = SearchroductinitialState, action )=>{
    switch(action.type){
        case SEARCH_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case SEARCH_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                searchproducts:action.payload,
            };
        case SEARCH_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}


const ProductIdDetail ={
    idProduct : [],
    loading:false,
    error:null,
};

export const ProductIdReducer = (state = ProductIdDetail, action )=>{
    switch(action.type){
        case PRODUCT_ID_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case PRODUCT_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                idProduct:action.payload,
            };
        case PRODUCT_ID_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}