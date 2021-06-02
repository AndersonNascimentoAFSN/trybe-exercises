import { SENDFORM } from '../reducers/reducerForm';
import { RESETFORM } from '../reducers/reducerForm';

function sendform(state) {
  return { type: SENDFORM, payload: { submitted: true } }
}

// git flow
// conversional commit
