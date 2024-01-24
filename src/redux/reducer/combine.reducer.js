import { combineReducers } from 'redux';
import siginupreducer from './siginup.reducer';
import loginreducer from './login.reducer';
import  {userReducer} from './user.reducer';
 
  const rootReducer = combineReducers({
  generateOTP: siginupreducer,
  verifyOTP: loginreducer,
  user:userReducer 
 
});
export default (rootReducer)