
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


  return {
    render,
    get_players,
    players,
    current_player
  }

})(document);
