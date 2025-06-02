const scoreJoueur = parseInt(localStorage.getItem("scoretotaljoueur") || "0");
    const scoreOrdi = parseInt(localStorage.getItem("scoretotalordi") || "0");
    const mancheactuelle = parseInt(localStorage.getItem("manche") || "1");
    const totalmanches = parseInt(localStorage.getItem("nbmanches") || "3");

    document.getElementById("manche-num").textContent = mancheactuelle;

    const resultat = document.getElementById("resultat");
    if (scoreJoueur > scoreOrdi) {
      resultat.textContent = "Le joueur a gagné cette manche !";
    } else if (scoreJoueur < scoreOrdi) {
      resultat.textContent = "L'ordinateur a gagné cette manche !";
    } else {
      resultat.textContent = "Vous etes à egalité!";
    }
      document.getElementById("btn-suivant").addEventListener("click", fonctionsuivante);
      
      function fonctionsuivante(){

        const prochainemanche = mancheactuelle + 1;

      if (prochainemanche > totalmanches) {
        window.location.href = "index3.html"; 
      } 
        else {
        localStorage.setItem("manche", prochainemanche); 
        window.location.href = "index2.html";
      }

      };
    