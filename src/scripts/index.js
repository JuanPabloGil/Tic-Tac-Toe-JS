
import gameBoard from './game_board';
import gameController from './game_controller';
import aiEntity from './ai_entity'

function validatePlayers(player1, player2) {
  if (player1.length > 3 && player2.length > 3) {
    return true;
  }
  return false;
}

const button = document.getElementById('button');
button.addEventListener('click', () => {
  gameController.players = [];
  gameBoard.cleanBoard();
  gameController.render(gameBoard.arr);
  gameController.currentPlayer = 0;

  if (gameController.againstComputer) {
    gameController.players = gameController.getPlayers('Human', 'AI');
    gameController.displayOnTitleMessage(`Turn's of:  ${gameController.players[gameController.currentPlayer].name}`);
  } else {
    const form = document.getElementById('form');
    const p1 = form.playerOne;
    const p2 = form.playerTwo;

    if (validatePlayers(p1.value, p2.value)) {
      gameController.players = gameController.getPlayers(p1.value, p2.value);
      gameController.displayOnTitleMessage(`Turn's of:  ${gameController.players[gameController.currentPlayer].name}`);
      document.getElementById('error_message').textContent = '';
    } else {
      document.getElementById('error_message').textContent = "The playe's name must have more than 3 chars ";
    }
  }
});


const toggleButton = document.querySelector('.againstComputer input');
toggleButton.addEventListener('click', (event) => {
  gameController.againstComputer = event.target.checked;
  gameController.players = [];
  gameBoard.cleanBoard();
  gameController.render(gameBoard.arr);

  const form = document.getElementById('form');
  if (gameController.againstComputer) {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
});

function checkCurrentPlayer(place, cPlayer) {
  if (gameController.players.length > 0
    && gameBoard.addMove(place, gameController.players[cPlayer].symbol)
  ) {
    gameController.currentPlayer = cPlayer === 0 ? 1 : 0;
    gameController.displayOnTitleMessage(`Turn's of:  ${gameController.players[gameController.currentPlayer].name}`);
    gameController.render(gameBoard.arr);

    if (gameBoard.thereIsWinner()) {
      gameController.displayOnTitleMessage(`Congratulations ${gameController.players[cPlayer].name} you win `);
    } else if (!gameBoard.thereIsPlace()) {
      gameController.displayOnTitleMessage('Its a tie');
    }
  } else if (gameController.players.length === 0) {
    gameController.displayOnTitleMessage('Please press start game');
  }
}

const squares = [...document.querySelectorAll('.square')];
squares.forEach((square) => {
  square.addEventListener('click', (event) => {
    if (!gameBoard.thereIsWinner()) {
      let cPlayer = gameController.currentPlayer;
      let place = event.target.value;
      checkCurrentPlayer(place, cPlayer);

      if (gameController.players.length > 0
        && gameController.againstComputer
        && gameBoard.thereIsPlace()
      ) {
        cPlayer = gameController.currentPlayer;
        place = (aiEntity.bestMove() + 1).toString();
        checkCurrentPlayer(place, cPlayer);
      }
    }
  });
});

gameController.render(gameBoard.arr);
