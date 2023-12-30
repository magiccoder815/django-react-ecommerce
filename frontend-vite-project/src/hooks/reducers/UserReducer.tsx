import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL , USER_REGISTER_SUCCESS } from "../constans/UserConstans";

const Register ={
    userRegister : [],
    loading:false,
    error:null,
};

export const userRegisterReducer = (state = Register, action )=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case USER_REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                userRegister:action.payload,
            };
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}