
import { POST_MEDICALFILES,AUTH_ERRORS,USER_LOADING,GET_MEDICALFILES} from "../constants/fileactionTypes";


const initialState = {
    token: localStorage.getItem('token'), //null
    medicalFile: null,
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
   
      localStorage.setItem('token', payload.token);
      
        return {
            ...state,

            isLoading: false,
            isAuth: true,
            msg: payload.msg,//({ msg: "medicalFile created", medicalfile, user });
            ...payload,
          };
          case GET_MEDICALFILES:
            return {
              ...state,
              isLoading: false,
              isAuth: true,
              ...payload,
            };
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