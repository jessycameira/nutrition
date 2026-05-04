function afficherVueSemaine() {
  const container = document.getElementById("vue-semaine");
  const tousLesTotaux = [];

  planNutrition.forEach((jourData) => {
    const colonne = document.createElement("div");
    colonne.classList.add("jour-colonne");

    const titre = document.createElement("div");
    titre.classList.add("jour-titre");
    titre.textContent = jourData.jour;
    colonne.appendChild(titre);

    ["matin", "dejeuner", "collation", "diner"].forEach((type) => {
      const card = creerMealCard(type, jourData.repas[type]);
      colonne.appendChild(card);
    });

    const { element: resumeEl, totaux } = creerResumJour(jourData.repas);
    colonne.appendChild(resumeEl);
    tousLesTotaux.push(totaux);

    container.appendChild(colonne);
  });

  afficherResumeSemaine(tousLesTotaux);
}

document.addEventListener("DOMContentLoaded", afficherVueSemaine);
