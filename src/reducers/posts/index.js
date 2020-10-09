import { POSTS } from '../../constants/actionTypes';

export default (state=[], action) => {
  switch(action.type) {
    case POSTS.GET_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}