import { SLIDER_REQUEST, SLIDER_FAIL, SLIDER_SUCCESS,
SOCIAL_FAIL, SOCIAL_REQUEST,SOCIAL_SUCCESS } from "../constans/Settingsconstans";

const initialState ={
    sliders : [],
    loading:false,
    error:null,
};

export const sliderReducer = (state = initialState, action )=>{
    switch(action.type){
        case SLIDER_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case SLIDER_SUCCESS:
            return{
                ...state,
                loading:false,
                sliders:action.payload,
            };
        case SLIDER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}


const socialState ={
    socials : [],
    loading:false,
    error:null,
};

export const SocialReducer = (state = socialState, action )=>{
    switch(action.type){
        case SOCIAL_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case SOCIAL_SUCCESS:
            return{
                ...state,
                loading:false,
                socials:action.payload,
            };
        case SOCIAL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}
