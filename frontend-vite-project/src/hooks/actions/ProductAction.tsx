import { BASE_URL } from "../../configUrl";
import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../constans/Productconstans"
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