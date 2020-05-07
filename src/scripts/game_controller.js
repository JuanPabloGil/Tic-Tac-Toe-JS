import Player from './players';

const gameController = (function gameController(doc) { // eslint-disable-line no-unused-vars
  const players = [];
  const currentPlayer = 0;
  const againstComputer = true;

  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.textContent = arr[index];
    });
  };

  const getPlayers = (playerOne, playerTwo) => [Player(
    playerOne,
    '●',
  ),
  Player(
    playerTwo,
    '✘',
  )];

  const displayOnTitleMessage = function displayOnTitleMessage(message) {
    doc.getElementById('cPlayer').textContent = message;
  };


  return {
    againstComputer,
    players,
    currentPlayer,
    displayOnTitleMessage,
    render,
    getPlayers,
  };
}(document));


export default gameController;
