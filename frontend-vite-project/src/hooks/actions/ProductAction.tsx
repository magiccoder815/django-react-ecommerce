import { BASE_URL } from "../../configUrl";
import { 
    CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS,
    PRODUCT_DETAIL_RESET,
    PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS

} from "../constans/Productconstans"
import axios from "axios";

export const getCategories = () => async  (dispatch)=>{
    dispatch({type:'CATEGORIES_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/category/select/");
        dispatch({type:'CATEGORIES_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'CATEGORIES_FAIL', payload:error.message || "Error system" })
    }
};

export const getbrands = () => async  (dispatch)=>{
    dispatch({type:'BRAND_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/brand/select/");
        dispatch({type:'BRAND_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'BRAND_FAIL', payload:error.message || "Error system" })
    }
};

export const getProduct = () => async  (dispatch)=>{
    dispatch({type:'PRODUCT_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/product/select/");
        dispatch({type:'PRODUCT_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'PRODUCT_FAIL', payload:error.message || "Error system" })
    }
};


export const getTopProduct = () => async  (dispatch)=>{
    dispatch({type:'TOP_PRODUCT_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/product/select/?is_top=True");
        dispatch({type:'TOP_PRODUCT_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'TOP_PRODUCT_FAIL', payload:error.message || "Error system" })
    }
};

export const getSearchProduct = (url) => async  (dispatch)=>{
    dispatch({type:'SEARCH_PRODUCT_REQUEST'});
    try{
        const response = await axios.get(url);
        dispatch({type:'SEARCH_PRODUCT_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'SEARCH_PRODUCT_FAIL', payload:error.message || "Error system" })
    }
};

export const getProductDetail = (url) => async  (dispatch)=>{
    dispatch({type:'PRODUCT_DETAIL_REQUEST'});
    try{
        const response = await axios.get(url);
        dispatch({type:'PRODUCT_DETAIL_SUCCESS', payload:response.data});
   
    }
    catch(error){
        dispatch({type:'PRODUCT_DETAIL_FAIL', payload:error.message || "Error system" })
    }
     
};
export const resetProductDetail=()=>{
    return{type:PRODUCT_DETAIL_RESET};
}


export const fetchIDProductDetail = (productId) => async  (dispatch)=>{
 
    try{
        const url= BASE_URL+'/product/'+productId
        dispatch({type:'PRODUCT_ID_REQUEST'});

        const response = await axios.get(url);
        const productData = response.data;

        dispatch({type:'PRODUCT_ID_SUCCESS', payload:productData});

        return productData;
   
    }
    catch(error){
        dispatch({type:'PRODUCT_ID_FAIL', payload:error.message || "Error system" })
    }
     
};
