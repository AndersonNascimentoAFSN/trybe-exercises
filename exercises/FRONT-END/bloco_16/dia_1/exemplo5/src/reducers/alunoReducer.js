// / aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário

import { INCREMENTAR_TEMPO, REDUZIR_TEMPO, MODIFICAR_EMAIL } from '../actions/index.js';

const INITIAL_STATE = {
  nome: 'Anderson Nascimento',
  email: 'anderson.nascimentoafsn@gmail.com',
  diasRestantes: 120,
};

export const alunoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENTAR_TEMPO:
      return { ...state,
        diasRestantes: state.diasRestantes + 1,
      };
    case REDUZIR_TEMPO:
      return { ...state, 
        diasRestantes: state.diasRestantes - 1,
      };
    case MODIFICAR_EMAIL:
      return { ...state, email: action.email, };
    default: 
      return state;
  }
}

// export default alunoReducer;
