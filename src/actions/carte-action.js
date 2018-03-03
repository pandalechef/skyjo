export const CARTE_REMPLACEE = 'CARTE_REMPLACEE';
export const CARTE_RETOURNEE = 'CARTE_RETOURNEE';

export function remplacerCarte(carte, idJoueur, carteAPlacer) {
  return dispatch => {
    dispatch({
      type: CARTE_REMPLACEE,
      carte: carte,
      idJoueur: idJoueur,
      carteAPlacer: carteAPlacer
    });
  };
}

export function retournerCarte(carte, idJoueur) {
  return dispatch => {
    dispatch({
      type: CARTE_RETOURNEE,
      carte: carte,
      idJoueur: idJoueur
    });
  };
}
