
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
      '✘'
    ),
    Player(
      playerTwo,
      '●'
    )];
  }

  let current_player = 0 ;

  const display_current_turn = function(current_player) {
    document.getElementById('cPlayer').textContent =  "Player's turn: " + this.players[current_player].symbol;
  }


  return {
    render,
    get_players,
    players,
    current_player,
    display_current_turn
  }

})(document);
