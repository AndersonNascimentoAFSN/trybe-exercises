const INCREMENTAR = 'INCREMENTAR';

const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENTAR:
      return state + 1;
    default: 
    return state;
  }
}

export default reducer;
