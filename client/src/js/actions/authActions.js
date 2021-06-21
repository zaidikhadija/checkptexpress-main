import axios from "axios"
import {REGISTER_USER,LOGIN_USER,LOGOUT_USER,GET_AUTH_USER,USER_LOADING,AUTH_ERRORS} from 
'../constants/actionTypes';

import { Alert } from 'reactstrap';
//USER_LOADING
const userLoading=()=>dispatch=>{
    dispatch({type:USER_LOADING,})}
    

// REGISTER_USER
export const registerUser=(FormData)=>async dispatch=>{ 
    dispatch(userLoading());
    try {
        const res=await axios.post("/api/users/registre",FormData)
        dispatch({type:REGISTER_USER,payload:res.data})//{user registred with success,user,token}
    } catch (error) {
        // console.log(error);
        // // BA3ED
        console.dir(error);
        const { errors, msg } = error.response.data;
    
        if (Array.isArray(errors)) {
          errors.forEach((err) => alert(err.msg));
        }
        console.log(errors);
        if (msg) {
          alert(msg);
        }
    
        dispatch({
          type: AUTH_ERRORS,
        });
      }
    };     
    
    
    

//LOGIN_USER
export const loginUser=(FormData)=>async dispatch=>{ 
    dispatch(userLoading());
try {
    const res=await axios.post("/api/users/login",FormData)
    dispatch({type:LOGIN_USER,payload:res.data})
} catch (error) {
    // console.log(error);
    // // BA3ED
    console.dir(error);
    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
//GET_AUTH_USER
export const getAuthUser=()=>async dispatch=>{
    try{
        //headers
        const config={
            headers:{'x-auth-token': localStorage.getItem('token')}}

        
        const res=await axios.get("/api/users/authUser",config)
        dispatch({type:GET_AUTH_USER,payload:res.data})//{user:req.user}
    } catch (error){console.log(error)
        dispatch({type:AUTH_ERRORS,})
    }
    
    }
    
    //LOGOUT_USER
    export const logout = () => (dispatch) => {
        dispatch({
          type: LOGOUT_USER,
        });
      };
      




