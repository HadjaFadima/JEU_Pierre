const scoreJoueur = parseInt(localStorage.getItem("scoretotaljoueur") || "0");
    const scoreOrdi = parseInt(localStorage.getItem("scoretotalordi") || "0");

    document.getElementById("final-joueur").textContent = scoreJoueur;
    document.getElementById("final-ordi").textContent = scoreOrdi;

    const fin = document.getElementById("last");
    if (scoreJoueur > scoreOrdi) {
      fin.textContent = "Félicitations ! Vous avez remporté la partie !";
    } else if (scoreJoueur < scoreOrdi) {
      fin.textContent = "L'ordinateur a remporté cette partie !";
    } else {
      fin.textContent = "Égalité parfaite !";
    }

    
    localStorage.removeItem("scoretotaljoueur");
    localStorage.removeItem("scoretotalordi");
    localStorage.removeItem("manche");
    localStorage.removeItem("nbmanches");
    localStorage.removeItem("tentativesparmanche");