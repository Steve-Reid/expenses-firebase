import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
