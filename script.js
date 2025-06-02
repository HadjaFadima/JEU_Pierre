
document.getElementById('valider').addEventListener('click', validation);

function validation(){
  const manches =document.getElementById('manches').value;
  const tentatives =document.getElementById('tentatives').value;

  localStorage.setItem('nbmanches', manches);
  localStorage.setItem('tentativesparmanche', tentatives);
  localStorage.setItem('manche', '1'); 
  localStorage.setItem('scoretotaljoueur','0');
  localStorage.setItem('scoretotalordi','0');

  window.location.href = 'index2.html';

};