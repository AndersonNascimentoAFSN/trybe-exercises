export const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
export const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
export const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = () => ({ type: MODIFICAR_EMAIL });


export const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
export const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
export const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });