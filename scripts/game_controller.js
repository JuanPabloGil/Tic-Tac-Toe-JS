/* global  Player */
const gameController = (function (doc) {
  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.textContent = arr[index];
    });
  };

  const players = [];

  const get_players = (playerOne, playerTwo) => [Player(
    playerOne,
    '●',
  ),
  Player(
    playerTwo,
    '✘',
  )];

  const current_player = 0;

  const display_on_title_message = function (message) {
    doc.getElementById('cPlayer').textContent = message;
  };

  const against_computer = true;


  return {
    render,
    get_players,
    players,
    current_player,
    display_on_title_message,
    against_computer,
  };
}(document));
