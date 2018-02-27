export const CHOIX_CARTE_A_PLACER = 'CHOIX_CARTE_A_PLACER';

export function choixCarteAPlacer(carteAPlacer) {
  return dispatch => {
    dispatch({
      type: CHOIX_CARTE_A_PLACER,
      carteAPlacer: carteAPlacer
    });
  };
}
export const PROPOSITION_DEFAUSSE_OU_PIOCHE = 'PROPOSITION_DEFAUSSE_OU_PIOCHE';
export const CHOIX_DEFAUSSE = 'CHOIX_DEFAUSSE';
export const PROPOSTION_POUBELLE_OU_PIOCHE = 'PROPOSTION_POUBELLE_OU_PIOCHE';
export const CHOIX_MISE_POUBELLE = 'CHOIX_MISE_POUBELLE';
export const CHOIX_JOUER_CARTE_PIOCHE = 'CHOIX_JOUER_CARTE_PIOCHE';
export const CARTE_RETOURNEE = 'CARTE_RETOURNEE';

export function propositionDefausseOuPioche() {
  return dispatch => {
    dispatch({
      type: PROPOSITION_DEFAUSSE_OU_PIOCHE
    });
  };
}

export function choixDefausse(carteDefausse) {
  return dispatch => {
    dispatch({
      type: CHOIX_DEFAUSSE,
      carteDefausse: carteDefausse
    });
  };
}

export function propostionPoubelleOuPioche() {
  return dispatch => {
    dispatch({
      type: PROPOSTION_POUBELLE_OU_PIOCHE
    });
  };
}

export function jeterCarte() {
  return dispatch => {
    dispatch({
      type: CHOIX_MISE_POUBELLE
    });
  };
}

export function jouerPioche() {
  return dispatch => {
    dispatch({
      type: CHOIX_JOUER_CARTE_PIOCHE
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
