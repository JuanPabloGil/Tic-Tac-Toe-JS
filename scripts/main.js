
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const form = document.getElementById('form');

  const playerOne =form.playerOne.value;
  const playerTwo =form.playerTwo.value;

  //if (validatePlayers(playerOne,playerTwo) {

    const player1 = Player(
      playerOne,
      'X'
    );
    const player2 = Player(
      playerTwo,
      'O'
    );
    
console.log(player1);
console.log(player2);
  //}
});

gameController.render(gameBoard.arr);
