# Jeu de paires

- Niveaux de difficulté : select puis submit > createGrid

  - Facile : 12 cases
  - Moyen : 18
  - Difficile : 24

- changement taille de la grille, nécessite nb pairs de cartes et 2 cartes identiques
- liste cartes avec paires > fetch API

- quand jeu en cours : hide form et show bouton restart : reset gameState
  switch if textContent === Commencer => startGame()
  if textContent === réessayer (boite dialgogue pour confirmer choix
  ) => resetGame

- Timeout après clic pour laisser un temps d'attente avant de tourner la carte

- quand erreur : replacer carte état initial
- quand matching pair : laisser cartes visibles sur la grid
