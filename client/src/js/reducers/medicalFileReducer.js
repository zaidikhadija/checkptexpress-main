
import { POST_MEDICALFILES,AUTH_ERRORS,USER_LOADING,GET_MEDICALFILES,DELETE_MEDICALFILE, EDIT_MEDICALFILES} from "../constants/fileactionTypes";


const initialState = {
  token: localStorage.getItem('token'),
 
    isAuth: true,
    isLoading: true,
    msg: null,
  };
  const medicalFileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
  case POST_MEDICALFILES:
    //console.log(payload);
        return {
            ...state,
            
            isLoading: false,
            isAuth: true,
            msg: payload.msg,//({ msg: "medicalFile created", medicalfile, user });
            ...payload,
          };
          case GET_MEDICALFILES:
            case EDIT_MEDICALFILES:
            return {
              ...state,
              isLoading: false,
              isAuth: true,
              ...payload,
            };
            case DELETE_MEDICALFILE:
            // localStorage.getItem('token');
            
              return{
                ...state,
                isLoading: false,
                isAuth: true,
                msg: payload.msg,
                // ...payload,
              }
            case AUTH_ERRORS:
              localStorage.removeItem('token');
                return {
                  ...state,
                  token: null,
                  isAuth: false,
                  user: null,
                  isLoading: false,
                };
          default:
            return state;
        }
        }
export default  medicalFileReducer;