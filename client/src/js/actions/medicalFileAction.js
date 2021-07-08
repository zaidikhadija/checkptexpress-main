import axios from "axios"
import { POST_MEDICALFILES,AUTH_ERRORS,USER_LOADING, GET_MEDICALFILES,EDIT_MEDICALFILES,DELETE_MEDICALFILE} from "../constants/fileactionTypes";
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
export const getMedicalFile = () => async (dispatch) => {
    dispatch(userLoading());
  
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
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
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.post('http://localhost:5000/api/medicalFile/newFile', newFile,config);
      //console.log("res1",res)
      dispatch({
        type: POST_MEDICALFILES,
        payload: res.data,//{ msg: "medicalFile created", medicalfile, user });

      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }};
  

  //Delete  MedicalFile
  export const deletemedicalFile =(medicalFileId) => async (dispatch) => {
    // console.log(idmedicalFile);
    dispatch(userLoading());
    
    try {
      const config = {
        headers: {
          'x-auth': localStorage.getItem('token'),
        }
    }
      const res = await axios.delete("http://localhost:5000/api/medicalFile/deletemedicalFile/"+medicalFileId ,config);
      console.log("resOne",res)
      console.log("idDelete",medicalFileId)
    
      dispatch({
      
        type: DELETE_MEDICALFILE,
        payload: res.data, 
       
      });
      dispatch(getMedicalFile());

    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
  
//Edit medicalFile
export const editmedicalFile = (idMedicalfile,editedMedicalfile) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const config = {
      headers: {
        'x-auth': localStorage.getItem('token'),
      }
  }
    const res = await axios.put("http://localhost:5000/api/medicalFile/editMedicalfile/"+idMedicalfile,editedMedicalfile,config);
    
    dispatch({
      type: EDIT_MEDICALFILES,
      payload: res.data,//{ msg: "medicalFile created", medicalfile, user });

    });
    dispatch(getMedicalFile());
  } catch (error) {
    console.log(error);}};
    // console.log(error);
    // // BA3ED
//     console.dir(error);
//     const { errors, msg } = error.response.data;

//     if (Array.isArray(errors)) {
//       errors.forEach((err) => alert(err.msg));
//     }
//     console.log(errors);
//     if (msg) {
//       alert(msg);
//     }

//     dispatch({
//       type: AUTH_ERRORS,
//     });
//   }
// };
