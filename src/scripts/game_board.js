const gameBoard = (function gameBoard() { // eslint-disable-line no-unused-vars
  const LINES_TO_WIN = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

  const linesToWin = () => LINES_TO_WIN;

  const arr = ['', '', '', '', '', '', '', '', ''];

  const thereIsPlace = function thereIsPlace() {
    let response = false;
    this.arr.forEach((item) => {
      if (item !== '✘' && item !== '●') {
        response = true;
      }
    });
    return response;
  };

  const addMove = function addMove(place, symbol) {
    if (!/^[1-9]$/.test(place)
      || typeof place !== 'string'
      || this.arr[parseInt(place, 10) - 1] === '●'
      || this.arr[parseInt(place, 10) - 1] === '✘') {
      return false;
    }

    this.arr[parseInt(place, 10) - 1] = symbol;
    return true;
  };

  const thereIsWinner = function thereIsWinner() {
    let response = false;
    linesToWin().forEach((line) => {
      if (this.arr[line[0]] === this.arr[line[1]]
          && this.arr[line[1]] === this.arr[line[2]]
          && this.arr[line[0]] !== ''
      ) response = true;
    }, this);
    return response;
  };

  const giveMeWinner = function giveMeWinner() {
    let response = '';
    linesToWin().forEach((line) => {
      if (this.arr[line[0]] === this.arr[line[1]]
        && this.arr[line[1]] === this.arr[line[2]]
        && this.arr[line[0]] !== ''
      ) response = this.arr[line[0]];
    }, this);
    return response;
  };

  const cleanBoard = function cleanBoard() {
    this.arr = ['', '', '', '', '', '', '', '', ''];
  };


  return {
    arr,
    thereIsPlace,
    thereIsWinner,
    addMove,
    giveMeWinner,
    cleanBoard,
  };
}());

export default gameBoard;
