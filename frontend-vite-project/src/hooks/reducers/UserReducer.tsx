import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL , USER_REGISTER_SUCCESS ,
    USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAIL, USER_INFO_RESET, USER_CHANGEPASSWORD_REQUEST, USER_CHANGEPASSWORD_SUCCESS, USER_CHANGEPASSWORD_FAIL, WISHLIST_GET_REQUEST, WISHLIST_GET_SUCCESST, WISHLIST_GET_FAIL, WISHLIST_POST_REQUEST, WISHLIST_POST_SUCCESST, WISHLIST_POST_FAIL, WISHLIST_DELETE_REQUEST, WISHLIST_DELETE_SUCCESST, WISHLIST_DELETE_FAIL, WISHLIST_GET_SUCCESS, WISHLIST_GET_RESET

} from "../constans/UserConstans";

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
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                userRegister:action.payload,
            };
        case USER_REGISTER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}

const Login ={
    userLogin : [],
    loading:false,
    error:null,
};

export const UserLoginReducer = (state = Login, action )=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                userLogin:action.payload,
            };
        case USER_LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        case USER_LOGIN_LOGOUT:
            return Login
        default:
            return state;
    }
}

const Information ={
    userInfo : null,
    loading:false,
    error:null,
};

export const userReducer = (state = Information, action )=>{
    switch(action.type){
        case USER_INFO_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case USER_INFO_SUCCESS:
            return{
                ...state,
                loading:false,
                userInfo:action.payload,
                error: null,
            };
        case USER_INFO_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        case USER_INFO_RESET:
                return Information
      
        default:
            return state;
    }
}



const ChangePassword ={
    Cpassword : [],
    loading:false,
    error:null,
};

export const userChangePassReducer = (state = ChangePassword, action )=>{
    switch(action.type){
        case USER_CHANGEPASSWORD_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case USER_CHANGEPASSWORD_SUCCESS:
            return{
                ...state,
                loading:false,
                Cpassword:action.payload,
            };
        case USER_CHANGEPASSWORD_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}


const getWishlist ={
    getWish : [],
    loading:false,
    error:null,
};

export const getWishlistReducer = (state = getWishlist, action )=>{
    switch(action.type){
        case WISHLIST_GET_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case WISHLIST_GET_SUCCESS:
            return{
                ...state,
                loading:false,
                getWish:action.payload,
            };
        case WISHLIST_GET_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        case WISHLIST_GET_RESET:
            return getWishlist
        default:
            return state;
    }
}


const postWishlist ={
    postWish : [],
    loading:false,
    error:null,
};

export const postWishlistReducer = (state = postWishlist, action )=>{
    switch(action.type){
        case WISHLIST_POST_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case WISHLIST_POST_SUCCESST:
            return{
                ...state,
                loading:false,
                postWish:action.payload,
            };
        case WISHLIST_POST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}


const deleteWishlist ={
    deleteWish : [],
    loading:false,
    error:null,
};

export const deleteWishlistReducer = (state = deleteWishlist, action )=>{
    switch(action.type){
        case WISHLIST_DELETE_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case WISHLIST_DELETE_SUCCESST:
            return{
                ...state,
                loading:false,
                deleteWish:action.payload,
            };
        case WISHLIST_DELETE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
}

