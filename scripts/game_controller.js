
const gameController = (function(doc) {

  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.textContent = arr[index];
    });
  }

  let players = [];

  const get_players = (playerOne, playerTwo) => {
    return [Player(
      playerOne,
      '●'
    ),
    Player(
      playerTwo,
      '✘'
    )];
  }

  let current_player = 0 ;

  const display_current_turn = function(current_player) {
    doc.getElementById('cPlayer').textContent =  "Player's turn: " + this.players[current_player].name;
  }

  let against_computer = true;


  return {
    render,
    get_players,
    players,
    current_player,
    display_current_turn,
    against_computer
  }

})(document);
