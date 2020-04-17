
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

  return {
    render,
    get_players,
    players
  }

})(document);
