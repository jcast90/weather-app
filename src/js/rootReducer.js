import { combineReducers } from 'redux';
import cityReducer from './reducers/cityReducer';

const rootReducer = combineReducers({
  // add reducers
  city: cityReducer
});

export default rootReducer;
