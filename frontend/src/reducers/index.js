import { combineReducers } from 'redux';
import wines from './wines';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  wines,
  loadingBar: loadingBarReducer
});
