export const CLIC_CARTE = "CLIC_CARTE";

export function clicCarte(carte, idJoueur, carteAPlacer) {
  return dispatch => {
    dispatch({
      type: CLIC_CARTE,
      carte: carte,
      idJoueur: idJoueur,
      carteAPlacer: carteAPlacer
    });
  };
}
