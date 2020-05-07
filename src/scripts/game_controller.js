/* global  Player */
const gameController = (function gameController(doc) { // eslint-disable-line no-unused-vars
  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.textContent = arr[index];
    });
  };

  const players = [];

  const getPlayers = (playerOne, playerTwo) => [Player(
    playerOne,
    '●',
  ),
  Player(
    playerTwo,
    '✘',
  )];

  const currentPlayer = 0;

  const displayOnTitleMessage = function displayOnTitleMessage(message) {
    doc.getElementById('cPlayer').textContent = message;
  };

  const againstComputer = true;


  return {
    render,
    getPlayers,
    players,
    currentPlayer,
    displayOnTitleMessage,
    againstComputer,
  };
}(document));
