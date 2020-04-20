
function validatePlayers(player1, player2) {
  if (player1.length > 3 && player2.length > 3) {
    return true
  }
}

const button = document.getElementById('button');

button.addEventListener('click', () => {
  const form = document.getElementById('form');

  const p1 = form.playerOne;
  const p2 = form.playerTwo;

  if (validatePlayers(p1.value, p2.value)) {
    gameController.players = gameController.get_players(p1.value, p2.value);
    document.getElementById('error_message').textContent = "";
    p1.value = "";
    p2.value = "";

  }else{
    document.getElementById('error_message').textContent = "The playe's name must have more than 3 chars ";
  }

});


const squares = [...document.querySelectorAll('.square')];
squares.forEach((square) => {
  square.addEventListener('click',(event) => {
    //event.target.textContent 
    console.log(gameController.players);
  });
});

gameController.render(gameBoard.arr);
