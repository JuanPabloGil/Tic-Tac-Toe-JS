
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

  const display_on_title_message = function(message) {
    doc.getElementById('cPlayer').textContent =  message;
  }

  let against_computer = true;


  return {
    render,
    get_players,
    players,
    current_player,
    display_on_title_message,
    against_computer
  }

})(document);
