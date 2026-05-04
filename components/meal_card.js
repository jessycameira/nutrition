function creerMealCard(typeRepas, repas) {
  const labels = {
    matin: "Petit-déjeuner",
    dejeuner: "Déjeuner",
    collation: "Collation",
    diner: "Dîner"
  };

  const card = document.createElement("div");
  card.classList.add("meal-card");

  card.innerHTML = `
    <h4>${labels[typeRepas]}</h4>
    <p>${repas.nom}</p>
    <p class="calories">${repas.calories} kcal &nbsp;|&nbsp; P: ${repas.proteines}g &nbsp;G: ${repas.glucides}g &nbsp;L: ${repas.lipides}g</p>
  `;

  return card;
}
