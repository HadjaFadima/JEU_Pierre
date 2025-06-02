
const bouttons = document.querySelectorAll('button[data-choice]');
const message = document.getElementById('message');
const Scorej = document.getElementById('joueur-score');
const Scoreo = document.getElementById('ordi-score');
const imgresultat = document.getElementById('img-resultat');
const mancheTitre = document.querySelector('h1');


let scorejoueur = 0;
let scoreordi = 0;
let tourActuel = 0;

let numanche = parseInt(localStorage.getItem('manche') || "1");
const totalmanches = parseInt(localStorage.getItem('nbmanches') || "3");
const maxTentatives = parseInt(localStorage.getItem('tentativesparmanche') || "6");

mancheTitre.textContent = `MANCHE ${numanche}`;

const choix = ['pierre', 'feuille', 'ciseaux'];

function choixdelordi() {
  const OR = Math.floor(Math.random() * choix.length);
  return choix[OR];
}

function gagnant(joueur, ordi) {
  if (joueur === ordi) return "Égalité !";
  if (
    (joueur === 'pierre' && ordi === 'ciseaux') ||
    (joueur === 'feuille' && ordi === 'pierre') ||
    (joueur === 'ciseaux' && ordi === 'feuille')
  ) {
    scorejoueur++;
    Scorej.textContent = scorejoueur;
    return "Tu gagnes !";
  } else {
    scoreordi++;
    Scoreo.textContent = scoreordi;
    return "L'ordinateur gagne !";
  }
}

bouttons.forEach(button => {
  button.addEventListener('click', fonctionjeu);

  function fonctionjeu() {

    if (tourActuel >= maxTentatives) return;

    const joueurChoix = button.dataset.choice;
    const ordiChoix = choixdelordi();
    const result = gagnant(joueurChoix, ordiChoix);
    const imagefilename = `${joueurChoix}_vs_${ordiChoix}.jpg`;
    imgresultat.src = imagefilename;

    message.textContent = `Vous avez choisi ${joueurChoix} || L'ordinateur a choisi ${ordiChoix} 
     ${result}`;
    tourActuel++;

    if (tourActuel === maxTentatives) {

      let totalJoueur = parseInt(localStorage.getItem('scoretotaljoueur') || '0');
      let totalOrdi = parseInt(localStorage.getItem('scoretotalordi') || '0');

      totalJoueur += scorejoueur;
      totalOrdi += scoreordi;

      localStorage.setItem('scoretotaljoueur', totalJoueur);
      localStorage.setItem('scoretotalordi', totalOrdi);

      setTimeout(temps, 4000);
      function temps() {
        window.location.href = 'index4.html';

      }
    }
  };
});
