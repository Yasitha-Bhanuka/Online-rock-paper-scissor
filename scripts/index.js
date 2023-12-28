let result = 'lets start!!';
let score = JSON.parse(localStorage.getItem('score')) || {
  wincount: 0,
  losecount: 0,
  tiecount: 0
}
let plmove = 'none';
let computerMove = 'none';

updateScoreElement();

function playgame (playmove){
   computerMove = pickComputerMove();
    
    if (playmove === 'rock'){
      if (computerMove === 'rock'){
        result = 'Tie';
        
      }else if (computerMove === 'paper') {
        result = 'You lose';

      } else if (computerMove === 'scissors') {
        result = 'Congradulations You win!!!';

      }
    } else if (playmove === 'paper'){
      if (computerMove === 'rock'){
        result = 'Congradulations You win!!!';

      }else if (computerMove === 'paper') {
        result = 'Tie';
  
      } else if (computerMove === 'scissors') {
        result = 'You lose';
     

      }
    } else if (playmove === 'scissors'){
      if (computerMove === 'rock'){
        result = 'Tie';
   
      }else if (computerMove === 'paper') {
        result = 'You lose';
     
      } else if (computerMove === 'scissors') {
        result = 'Congradulations You win!!!';
      }
    }


    if (result === 'Congradulations You win!!!'){
      score.wincount++;
    } else if (result === 'You lose') {
      score.losecount++;
    } else {
      score.tiecount++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    plmove = playmove;
    updateScoreElement();

}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wincount}
    loses: ${score.losecount}
    ties: ${score.tiecount}`;

  document.querySelector('.js-playmove')
  .innerHTML = `Your pick: <img class="image-result" src="Icons/${plmove}-emoji.png" alt="">`;

  document.querySelector('.js-computermove')
  .innerHTML = `Computer pick: <img class="image-result" src="Icons/${computerMove}-emoji.png" alt="">`;

  document.querySelector('.js-result')
  .innerHTML = `${result}`;
}

function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();

    if (randomNumber <= 1/3 && randomNumber >=0){
    computerMove = 'rock'; 
    } else if (randomNumber >1/3 && randomNumber<= 2/3){
    computerMove = 'paper';
    } else {
    computerMove = 'scissors';
    }

    return computerMove;
}
