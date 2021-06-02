export const SENDFORM = 'SENDFORM';
export const RESETFORM = 'RESETFORM';
// const ONBLURHANDLER = 'ONBLURHANDLER';
// const CHANGEHANDLER = 'CHANGEHANDLER';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

const reducerForm = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SENDFORM:
      return {...state, submitted: action.payload.submitted };
    case RESETFORM:
      return { ...INITIAL_STATE };
    // case ONBLURHANDLER:
    //   return { }
    default:
      return state;
  }
}

export default reducerForm;
