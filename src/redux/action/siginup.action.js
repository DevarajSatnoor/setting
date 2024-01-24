import Axios from "axios";
 
export const generateOtp = (number) => {
    return async (dispatch) => {
      try {
        const response = await Axios.post('http://localhost:4000/user/generateotp', { number });
        dispatch(generateOTPSuccess(response.data.success));
      } catch (error) {
        dispatch(generateOTPFailure('Error generating OTP'));
      }
    };
  };
 
  export const generateOTPSuccess = (message) => ({
    type: 'GENERATE_OTP_SUCCESS',
    payload: { message },
  });
 
  export const generateOTPFailure = (error) => ({
    type: 'GENERATE_OTP_FAILURE',
    payload: { error },
  });