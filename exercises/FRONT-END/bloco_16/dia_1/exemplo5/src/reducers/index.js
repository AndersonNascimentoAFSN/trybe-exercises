import { alunoReducer } from './alunoReducer.js';
import { aulasReducer } from './aulasReducer.js';

const rootReducer = Redux.combineReducers({ aluno: alunoReducer, aulas: aulasReducer });

export default rootReducer; 
