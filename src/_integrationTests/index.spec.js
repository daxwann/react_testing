import moxios from 'moxios';
import { createTestStore } from '../../utils/index';
import { fetchPosts } from '../actions/posts';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should update store", () => {
    const expectedState = [{
      title: 'Test title 1',
      body: 'Test body 1'
    },
    {
      title: 'Test title 2',
      body: 'Test body 2'
    },
    {
      title: 'Test title 3',
      body: 'Test body 3'
    }];

    const testStore = createTestStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    return testStore.dispatch(dispatch => fetchPosts(dispatch))
      .then(() => {
        const newState = testStore.getState();
        expect(newState.posts).toEqual(expectedState);
      })
  })
})