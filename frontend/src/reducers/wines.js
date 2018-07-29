import { RECEIVE_WINES } from '../actions/wines';

export default function wines (state=[], action) {
  switch(action.type) {
    case RECEIVE_WINES :
      return state.concat(action.wines)
    default :
      return state
  }
}
