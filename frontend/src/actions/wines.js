import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_WINES = 'RECEIVE_WINES';

function receiveWines (wines) {
  return {
    type: RECEIVE_WINES,
    wines
  }
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(
        (wines) => {
          dispatch(receiveWines(wines));
          dispatch(hideLoading());
        },
        (error) => {
          dispatch(hideLoading());
          alert('Oops...Something went wrong!');
        }
      );
  }
}
