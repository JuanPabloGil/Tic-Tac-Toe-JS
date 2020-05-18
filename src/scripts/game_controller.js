import dom from './domManipulation';
import player from './players';

const gameController = (function gameController(doc) { // eslint-disable-line no-unused-vars
  const players = [];
  const currentPlayer = 0;
  const againstComputer = true;

  const render = (arr) => {
    const squares = dom.getElements(doc, '.square');
    squares.forEach((square, index) => {
      dom.render(square, arr[index]);
    });
  };

  const getPlayers = (playerOne, playerTwo) => [player(
    playerOne,
    '●',
  ),
  player(
    playerTwo,
    '✘',
  )];

  const displayOnTitleMessage = function displayOnTitleMessage(message) {
    dom.render(dom.getElement(doc, '#cPlayer'), message);
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
