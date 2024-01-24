// generateOTPReducer.js
const initialState = {
    message: '',
    error: '',
    
  };
 
  const generateOTPReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GENERATE_OTP_SUCCESS':
        return {
          ...state,
          message: action.payload.message,
          error: '',
        };
      case 'GENERATE_OTP_FAILURE':
        return {
          ...state,
          message: '',
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
 
  export default generateOTPReducer;