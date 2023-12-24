import { CATEGORIES_FAIL, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../constans/Productconstans"

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