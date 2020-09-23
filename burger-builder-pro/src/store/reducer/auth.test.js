import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      redirectPath: '/',
    });
  });

  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          redirectPath: '/',
        },
        { type: actionTypes.AUTHENTICATE_SUCCESS, token: 'some-token', userId: 'some-userId' },
      ),
    ).toEqual({
      token: 'some-token',
      userId: 'some-userId',
      error: null,
      loading: false,
      redirectPath: '/',
    });
  });
});
