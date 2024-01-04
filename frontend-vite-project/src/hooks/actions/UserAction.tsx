import axios from "axios";
import { BASE_URL } from "../../configUrl";


export const Userregister = (email, username, first_name, last_name, password, is_active) => async  (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'});
    try{

        const config ={
            headers:{
                'Content-type': 'application/json',
            },
        };

        const data={
            email,
            username,
            first_name,
            last_name,
            password,
            is_active
        }

        const response = await axios.post(BASE_URL+"/customer/create/",data, config);
        dispatch({type:'USER_REGISTER_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAIL', payload:error.message || "Error system" })
    }
};



export const UserLogin = (username, password) => async  (dispatch)=>{
    dispatch({type:'USER_LOGIN_REQUEST'});
    try{

        const config ={
            headers:{
                'Content-type': 'application/json',
            },
        };

        const data={
            username,
            password,
        }

        const response = await axios.post(BASE_URL+"/customer/login/",data, config);
        dispatch({type:'USER_LOGIN_SUCCESS', payload:response.data});
        localStorage.setItem('userInfo', JSON.stringify(response.data))
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAIL', payload:error.message || "Error system" })
    }
};


export const userControl = () => async  (dispatch)=>{
    dispatch({type:'USER_INFO_REQUEST'});
    try{
        const userInfoFromStorage = localStorage.getItem('userInfo')
         ? JSON.parse(localStorage.getItem("userInfo"))
         :null ;

         if(userInfoFromStorage)
         {
            dispatch({type:'USER_INFO_SUCCESS', payload:userInfoFromStorage});
         }
         else
         {
            dispatch({type:'USER_INFO_FAIL', payload:error.message || "Error system" })
         }


       
    }
    catch(error){
        dispatch({type:'USER_INFO_FAIL', payload:error.message || "Error system" })
    }
};

export const logoutAction = () => async  (dispatch)=>{

    localStorage.removeItem('userInfo')
    dispatch({type:'USER_INFO_RESET' })
    dispatch({type:'USER_LOGIN_LOGOUT' })
    window.location.reload();


}


export const userChangePassword = (old_password, new_password1, new_password2) => async  (dispatch, getState)=>{
    dispatch({type:'USER_CHANGEPASSWORD_REQUEST'});
    try{

        const {userInfo} = getState().user;

        if(userInfo)
        {

            const config ={
                headers:{
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userInfo.access}`
                },
            };
    
            const data={
                old_password,
                new_password1,
                new_password2,
            
            }
    
            const response = await axios.post(BASE_URL+"/customer/change-password/",data, config);
            dispatch({type:'USER_CHANGEPASSWORD_SUCCESS', payload:response.data});



        }
        else
        {
            dispatch({type:'USER_CHANGEPASSWORD_FAIL', payload:error.message || "Error system" })

        }

        
    }
    catch(error){
        dispatch({type:'USER_CHANGEPASSWORD_FAIL', payload:error.message || "Error system" })
    }
};



export const getWishlistAction = () => async  (dispatch, getState)=>{
    dispatch({type:'WISHLIST_GET_REQUEST'});
    try{

        const {userInfo} = getState().user;
        if(userInfo)
        {
            const config ={
                headers:{
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userInfo.access}`
                },
            };

           
            const response = await axios.get(BASE_URL+"/customer/wishlist/", config);
            dispatch({type:'WISHLIST_GET_SUCCESS', payload:response.data});
        }
        else
        {
            dispatch({type:'WISHLIST_GET_FAIL', payload:error.message || "Error system" })

        }
        
    }
    catch(error){
        dispatch({type:'WISHLIST_GET_FAIL', payload:error.message || "Error system" })
    }
};

export const postWishlistAction = (product_id) => async  (dispatch, getState)=>{
    dispatch({type:'WISHLIST_POST_REQUEST'});
    try{

        const {userInfo} = getState().user;
        if(userInfo)
        {
            const config ={
                headers:{
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userInfo.access}`
                },
            };

            const data={
                product_id
              
              }

              
            const response = await axios.post(BASE_URL+"/customer/wishlist/", data, config);
            dispatch({type:'WISHLIST_POST_SUCCESST', payload:response.data});
        }
        else
        {
            dispatch({type:'WISHLIST_POST_FAIL', payload:error.message || "Error system" })

        }
        
    }
    catch(error){
        dispatch({type:'WISHLIST_POST_FAIL', payload:error.message || "Error system" })
    }
};



export const deleteWishlistAction = (id) => async  (dispatch, getState)=>{
    dispatch({type:'WISHLIST_DELETE_REQUEST'});
    try{

        const {userInfo} = getState().user;
        if(userInfo)
        {
            const config ={
                headers:{
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userInfo.access}`
                },
            };

                         
            const response = await axios.delete(BASE_URL+`/customer/wishlist/${id}`,  config);
            dispatch({type:'WISHLIST_DELETE_SUCCESST', payload:response.data});
            dispatch(resetWish());
            dispatch(getWishlistAction());
        }
        else
        {
            dispatch({type:'WISHLIST_DELETE_FAIL', payload:error.message || "Error system" })

        }
        
    }
    catch(error){
        dispatch({type:'WISHLIST_DELETE_FAIL', payload:error.message || "Error system" })
    }
};

export const resetWish=()=>{
   return{type:'WISHLIST_GET_RESET'}
}