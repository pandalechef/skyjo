export const CHOIX_CARTE_A_PLACER = 'CHOIX_CARTE_A_PLACER';
export const RETIRER_CARTE_PIOCHE = 'RETIRER_CARTE_PIOCHE';

export function choixCarteAPlacer(carteAPlacer) {
  return dispatch => {
    dispatch({
      type: CHOIX_CARTE_A_PLACER,
      carteAPlacer: carteAPlacer
    });
  };
}

export function retirerCartePioche(carteAPlacer) {
  return dispatch => {
    dispatch({
      type: RETIRER_CARTE_PIOCHE
    });
  };
}
