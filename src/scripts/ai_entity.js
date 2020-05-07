import gameBoard from './game_board';

const ai = '✘';
const human = '●';

const aiEntity = (function aiEntity() { // eslint-disable-line no-unused-vars

  const scores = () => ({
    '✘': 10,
    '●': -10,
    tie: 0,
  });

  function checkWinnerOrTie() {
    let result = '';
    if (gameBoard.thereIsWinner()) {
      result = gameBoard.giveMeWinner();
    } else if (!gameBoard.thereIsPlace()) {
      result = 'tie';
    }
    return result;
  }

  function minimax(depth, isMaximizing) {
    const result = checkWinnerOrTie();
    if (result !== '') {
      return scores()[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      gameBoard.arr.forEach((item, i) => {
        if (item === '') {
          gameBoard.arr[i] = ai;
          const score = minimax(depth + 1, false);
          gameBoard.arr[i] = '';
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    }
    let bestScore = Infinity;
    gameBoard.arr.forEach((item, i) => {
      if (item === '') {
        gameBoard.arr[i] = human;
        const score = minimax(depth + 1, true);
        gameBoard.arr[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    });
    return bestScore;
  }


  const bestMove = function bestMove() {
    let bestScore = -Infinity;
    let move;
    gameBoard.arr.forEach((item, i) => {
      if (item === '') {
        gameBoard.arr[i] = ai;
        const score = minimax(0, false);
        gameBoard.arr[i] = '';
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    });
    return move;
  };

  return {
    bestMove,
  };
}());

export default aiEntity;
