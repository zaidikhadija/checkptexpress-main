import axios from "axios"
import { POST_MEDICALFILES,AUTH_ERRORS,USER_LOADING, GET_MEDICALFILES} from "../constants/fileactionTypes";
//get

// export const getfiles=()=> dispatch  =>{
//     axios.get("http://localhost:5000/api/medicalFile/")
//  //    .then(res=>console.log(res))
//     .then(res=> dispatch({type:GET_MEDICALFILES,payload:res.data})  )
//     .catch(err=>console.log(err))
//  }
 
 
//  // post
//  export const createFile=(newFile)=>dispatch=>{
//      axios.post("http://localhost:5000/api/medicalFile/newFile",newFile)
//      .then(res=>dispatch(getfiles()) )
//      .catch(err=>console.log(err))
//  }
//  // delete
// export const deletemedicalFile=(idmedicalFile,userId)=>dispatch=>{
//     axios.delete("http://localhost:5000/api/medicalFile/deletemedicalFile/:idUser/:idmedicalFile"+idmedicalFile,userId)
//     // .then(res=> console.log(res))
//     .then(res=>dispatch(getfiles()) )
//     .catch(err=>console.log(err))
// }


// // edit
// export const editmedicalFile=(idmedicalFile,editedmedicalFile)=>dispatch=>{
//     axios.put("http://localhost:5000/api/medicalFile/editmedicalFile/:id"+idmedicalFile,editedmedicalFile)
//     .then(res=> dispatch(getfiles()) )
//     .catch(err=>console.log(err))
// }

// Get auth user
export const getfiles = () => async (dispatch) => {
    dispatch(userLoading());
  
    try {
      //headers
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        },
      };
      const res = await axios.get('http://localhost:5000/api/medicalFile/', config);
      dispatch({
        type: GET_MEDICALFILES,
        payload: res.data, // {user: req.user}
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
//***************
 
//Set the user loading
const userLoading = () => (dispatch) => {
    dispatch({
      type: USER_LOADING,
    });
  };
  
// Post MedicalFile
export const createFile = (newFile) => async (dispatch) => {
    dispatch(userLoading());
    
      try {
        //headers
        const config = {
          headers: {
            'x-auth': localStorage.getItem('token'),
          },
        };
      const res = await axios.post('http://localhost:5000/api/medicalFile/newFile', newFile,config);
      dispatch({
        type: POST_MEDICALFILES,
        payload: res.data,//{ msg: "medicalFile created", medicalfile, user });
      });
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