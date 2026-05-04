function creerResumJour(repasJour) {
  const totaux = Object.values(repasJour).reduce(
    (acc, repas) => {
      acc.calories  += repas.calories;
      acc.proteines += repas.proteines;
      acc.glucides  += repas.glucides;
      acc.lipides   += repas.lipides;
      return acc;
    },
    { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
  );

  const div = document.createElement("div");
  div.classList.add("nutrition-summary");
  div.innerHTML = `
    <strong>${totaux.calories} kcal</strong><br>
    P: ${totaux.proteines}g &nbsp;|&nbsp; G: ${totaux.glucides}g &nbsp;|&nbsp; L: ${totaux.lipides}g
  `;

  return { element: div, totaux };
}

function afficherResumeSemaine(tousLesTotaux) {
  const global = tousLesTotaux.reduce(
    (acc, t) => {
      acc.calories  += t.calories;
      acc.proteines += t.proteines;
      acc.glucides  += t.glucides;
      acc.lipides   += t.lipides;
      return acc;
    },
    { calories: 0, proteines: 0, glucides: 0, lipides: 0 }
  );

  const container = document.getElementById("totaux-semaine");
  container.innerHTML = `
    <div class="total-item"><span>${global.calories}</span><label>kcal totales</label></div>
    <div class="total-item"><span>${Math.round(global.calories / 7)}</span><label>kcal / jour</label></div>
    <div class="total-item"><span>${global.proteines}g</span><label>Protéines</label></div>
    <div class="total-item"><span>${global.glucides}g</span><label>Glucides</label></div>
    <div class="total-item"><span>${global.lipides}g</span><label>Lipides</label></div>
  `;
}
