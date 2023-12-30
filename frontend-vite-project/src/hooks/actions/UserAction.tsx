import axios from "axios";
import { BASE_URL } from "../../configUrl";


export const register = (email, username, first_name, last_name, password, is_active) => async  (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'});
    try{
        const response = await axios.post(BASE_URL+"/customer/create/");
        dispatch({type:'USER_REGISTER_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAIL', payload:error.message || "Error system" })
    }
};