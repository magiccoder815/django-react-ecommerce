import axios from "axios";
import { BASE_URL } from "../../configUrl";


export const getSlider = () => async  (dispatch)=>{
    dispatch({type:'SLIDER_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/slider/select/");
        dispatch({type:'SLIDER_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'SLIDER_FAIL', payload:error.message || "Error system" })
    }
};

export const getSocials = () => async  (dispatch)=>{
    dispatch({type:'SOCIAL_REQUEST'});
    try{
        const response = await axios.get(BASE_URL+"/socialmedia/select/");
        dispatch({type:'SOCIAL_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'SOCIAL_FAIL', payload:error.message || "Error system" })
    }
};