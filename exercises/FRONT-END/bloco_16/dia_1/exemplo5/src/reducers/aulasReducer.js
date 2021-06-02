// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas

import { COMPLETAR_AULA, COMPLETAR_CURSO, RESETAR_CURSO } from '../actions/index.js';

const INITIAL_STATE = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const newArray = [];
export const aulasReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMPLETAR_AULA:
      const index = state.findIndex((aula) => aula.id === action.payload);
      if(!isNaN(index) && state[index]) {
        return state.map((aula) => {
          if(state[index].id === aula.id) {
            return { ...aula, completa: true};
          }
            return { ...aula };
        })
      }
    case COMPLETAR_CURSO:
      return state.map((aula) => ({ ...aula, completa: true }));
    case RESETAR_CURSO:
      return state.map((aula) => ({ ...aula, completa: false }));
    default:
      return state;
  }
}

// export default aulasReducer;

// RESETAR_CURSO:
// for(const aula of state) {
//   aula.completa = true;
//   newArray.push(aula);
// }