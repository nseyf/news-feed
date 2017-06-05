import { FETCH_SOURCES } from '../actions/index';

export default function(state= [], action) {
  switch(action.type){
    case FETCH_SOURCES:
    return state.concat([action.payload.data])
    default:
    return state;
  }
}
