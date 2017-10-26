import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);
      // OR return[ action.payload.data, ...state];
      //concat doesn't change original array (state) so its not break rule; manipulating state directlly
  }
  return state;
}
