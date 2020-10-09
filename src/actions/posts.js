import { POSTS } from '../constants/actionTypes';
import { JSON_PLACEHOLDER_API } from '../constants/apiEndpoint';
import axios from 'axios';

export const fetchPosts = async (dispatch) => {
  await axios.get(JSON_PLACEHOLDER_API.GET_POSTS)
    .then(res => {
      dispatch({
        type: POSTS.GET_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: POSTS.GET_FAIL
      })
    })
} 