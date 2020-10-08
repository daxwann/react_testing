import { POSTS } from '../../constants/actionTypes';
import postsReducer from './index';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving get success type', () => {
    const posts = [{title: 'test post 1'},{title: 'test post 2'},{title: 'test post 3'}];
    const newState = postsReducer(undefined, {
      type: POSTS.GET_SUCCESS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  })
})