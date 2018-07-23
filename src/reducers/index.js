import { combineReducers } from 'redux';
import counterReducer from './reducer-counter';

const rootReducer = combineReducers({
      counter:counterReducer
});
export default rootReducer;
