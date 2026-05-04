function afficherDateSemaine() {
  const aujourd_hui = new Date();
  const jourSemaine = aujourd_hui.getDay();
  const diffLundi = (jourSemaine === 0 ? -6 : 1 - jourSemaine);

  const lundi = new Date(aujourd_hui);
  lundi.setDate(aujourd_hui.getDate() + diffLundi);

  const dimanche = new Date(lundi);
  dimanche.setDate(lundi.getDate() + 6);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const labelLundi   = lundi.toLocaleDateString("fr-FR", options);
  const labelDimanche = dimanche.toLocaleDateString("fr-FR", options);

  document.getElementById("semaine-label").textContent =
    `Semaine du ${labelLundi} au ${labelDimanche}`;
}

document.addEventListener("DOMContentLoaded", afficherDateSemaine);
