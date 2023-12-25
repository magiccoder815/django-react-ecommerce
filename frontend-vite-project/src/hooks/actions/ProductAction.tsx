import { BASE_URL } from "../../configUrl";
import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../constans/Productconstans"
import axios from "axios";

export const categoriesRequest = () =>({
    type:CATEGORIES_REQUEST,
});
export const categoriesSuccess = (categories) =>({
    type:CATEGORIES_SUCCESS,
    payload:categories,
});
export const categoriesFail = (error) =>({
    type:CATEGORIES_FAIL,
    payload:error,
});

export const getCategories = () => async  (dispatch)=>{
    dispatch(categoriesRequest());
    try{
        const response = await axios.get(BASE_URL+"/category/select/");
        dispatch(categoriesSuccess(response.data));
    }
    catch(error){
        dispatch(categoriesFail(error.message || "Error system"))
    }

};