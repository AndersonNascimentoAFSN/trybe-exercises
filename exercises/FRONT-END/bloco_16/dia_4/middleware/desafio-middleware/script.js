import store from './store/index.js';
import { tokenFetch } from './reducers/tokenReducer.js'
import { userFetch } from './reducers/userReducer.js';

async function login(user) {
  let state = store.getState();
  if(state.token.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  state = store.getState();
  await store.dispatch(userFetch(state.token.data));
}

login({ username: 'dog', password: 'dog' })
