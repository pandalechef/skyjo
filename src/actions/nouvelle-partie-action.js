export const DEFINIR_JOUEURS = 'DEFINIR_JOUEURS';

export function definirJoueurs(joueurs, pioche) {
  return dispatch => {
    dispatch({
      type: DEFINIR_JOUEURS,
      joueurs: joueurs,
      pioche: pioche
    });
  };
}
